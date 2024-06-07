export const identityScriptLoader = (): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        const tag = document.createElement('script');
        tag.src = "https://js.prembly.com/v1/inline/widget.js";
        tag.async = true;
        
        tag.addEventListener('load', () => {
            resolve(true); // Script loaded successfully
        });

        tag.addEventListener('error', (event: Event) => {
            reject(`Error loading script: ${event}`); // Script loading error
        });

        document.body.appendChild(tag);
    });
};
