
function customContainer(reactElement , mainContainer){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {
        if(prop === "type" && prop === "children") continue;
        domElement.setAttribute(prop , reactElement.props[prop]);
    }

    mainContainer.appendChild(domElement);
}


const reactElement = {
    type : 'a',
    props: {
        href : "https://www.google.com",
        target : "_blank",
    },
       children : "Google Link"
}

const mainContainer = document.querySelector('#root');
  customContainer(reactElement , mainContainer);

