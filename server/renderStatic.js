import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';


//react components
import SSR from '../src/components/pages/ssr/Ssr';


module.exports = function(requested_path, response){
    switch (requested_path){
        case "/":
           
            fs.readFile(path.resolve(__dirname + '/../public/data/posts.json'), 'utf8', (err, data) => {
                if (err) {
                    return response.send(err);
                }
                
                fs.readFile(path.resolve(__dirname + '/../public/html/index.html'), 'utf8', (err, htmlString) => {
                    if (err) {
                        console.log(err);
                        return response.send(err);
                    }
                    const renderComponent = new Promise((resolve, reject) => {
                        const string = renderToString(<SSR title={JSON.parse(data)[0].title} />);
                        resolve(string);
                    });

                    

                    renderComponent.then((html) => {

                        var new_string = htmlString.replace(
                            '<div id="root"><div class="ui load segment"><div class="ui active inverted dimmer"><div class="ui small text loader">Loading</div></div><p></p></div></div>'
                            ,
                            `<div id="root">${html}</div>`
                        )

                        new_string.replace(
                            '<script>var json;</script>'
                            ,
                            `<script>var json = ${data};</script>`
                            )
                        response.send(new_string)

                    })
                })
            })


          
        break;

        default:
            response.send('Page not found!')
    }
}