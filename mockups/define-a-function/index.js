import {LitElement, css, html} from 'lit';
import {property} from 'lit/decorators.js';

customElements.whenDefined("source-block", class extends LitElement {
    static styles = css`
	pre {
	    font-family: monospace;
	}
    `
    render() {
	return html`
	    <pre><slot></slot></pre>
	`
    }
})

const lineStyle = css`
    padding: 0 0.5em;
    margin: 0.25em 0;
`

customElements.define("import-statement", class extends LitElement {
    static properties = {
	from: {}
    }

    static styles = css`
	ul {
	    padding: 0;
	    margin: 0;
	    margin-left: 1rem;
	}
	summary {
	    ${lineStyle}
	    background-color: rgba(45, 99, 255, 0.1);
	}
	details:not(open) > summary::after {
	    content: " …";
	}
	details:open > summary {
	    background-color: rgba(45, 99, 255, 0.2);
	    border-radius: 0.25em;
	}
	details:open > summary::after {
	    content: "";
	}
	a {
	    text-decoration: underline;
	}
    `

    render() {
	return html`
	    <details>
		<summary>from <a href="#${this.from}">${this.from}</a> import</summary>
		<ul>
		    <slot></slot>
		</ul>
	    </details>
	`;
    }
})

customElements.define("import-item", class extends LitElement {
    static styles = css`
	li {
	    ${lineStyle};
	    list-style-type: none;
	    background-color: rgba(200, 255, 0, 0.1);
	    border-radius: 0.25em;
	    display: inline-block;
	}
    `
    render() {
	return html`
	    <li><slot></slot></li>
	`;
    }
})

customElements.define("key-val", class extends LitElement {
    static styles = css`
	dl, dd, dt {
	    display: inline-block;
	    margin: 0;
	}
	dl {
	    background-color: rgba(99, 170, 34, 0.1);
	    padding: 0 0.5em;
	}
	dl::before {
	}
    `
    static properties = {
	key: {},
	val: {}
    }
    render() {
	return html`
	    <dl><dt>${this.key}</dt> &xmap; <dd>${this.val}</dd></dl>
	`;
    }
})


customElements.define("function-call", class extends LitElement {
    render() {
	return html`
	    <p><slot></slot></p>
	`;
    }
})

customElements.define("map-literal", class extends LitElement {
    static properties = {
    }
    render() {
	return html`
	    <span><slot></slot></span>
	`;
    }
})

customElements.define("function-literal", class extends LitElement {
    render() {
	return html`
	    <details><summary>&#402;</summary><slot></slot></details>
	`;
    }
})

customElements.define("tagged-union", class extends LitElement {
    static properties = {
	name: {}
    }
    render() {
	return html`
	    <span><span>${this.name}</span><slot></slot></span>
	`;
    }
})

customElements.define("tagged-union-variant", class extends LitElement {
    static properties = {
	name: {}
    }
    render() {
	return html`
	    <span><span>${this.name}</span><slot></slot></span>
	`;
    }
})

customElements.define("inline-comment", class extends LitElement {
    // todo: render as speech bubble
    render() {
	return html`
	    <span><slot></slot></span>
	`;
    }
})

