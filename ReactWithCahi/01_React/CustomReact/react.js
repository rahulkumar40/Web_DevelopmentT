// mainContainer.appendChild = `<h1> HI </h1>`

function customerRander(reactElement, container){
    /*
    const domElemet = document.createElement(reactElement.type)
    domElemet.innerHTML = reactElement.children;
    domElemet.setAttribute('href', reactElement.props.href)
    domElemet.setAttribute('target', reactElement.props.target)
    container.appendChild(domElemet)
    */

    const domElemet = document.createElement(reactElement.type)
    domElemet.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {
        if(prop==='children') continue;
        domElemet.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElemet);
}


const reactElement = {
    type: 'a', 
    props:{
        href: 'https://google.com', 
        target: '_blank'
    },
    children: 'Click me to visit google'
}


const mainContainer = document.querySelector("#root");

customerRander(reactElement, mainContainer);