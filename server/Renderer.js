const ReactRender   = require('react-dom/server');
const React         = require('react');


module.exports = function(React_component, data){
    return new Promise((resolve, reject)=>{
        var html = ReactRender.renderToString(<React_component data={data}/>);
        resolve(html);
    })
}