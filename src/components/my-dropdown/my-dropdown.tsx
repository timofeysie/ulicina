import { Component, Event, EventEmitter, Prop, State } from '@stencil/core';

@Component({
	tag: 'my-dropdown',
	styleUrl: 'my-dropdown.scss'
})
export class myDropdown {
    /**  @public
     * @property items
     */
	public items: Array<any> = [
	   {  heading: 'Virtual DOM', 
	      description: 'A tree of custom objects representing a part of the DOM which can be acted upon quicker than manipulating the DOM itself' },
	   { heading: 'Async rendering', 
	      description : 'Allows parts of a component state to be rendered asynchronously (I.e. via XHR)' },
	   { heading : 'Reactive data-binding',
	      description : 'Allows data binding to be implemented through binding a state variable to an onChange event which allows the state to be changed as the input value changes' },
	   { heading : 'TypeScript',
	      description : 'A superset of JavaScript providing strong typing and class based programming constructs' },
	   { heading : 'JSX',
	      description : 'JavaScriptXML allows DOM nodes to be built with HTML-like syntax' }
	];

    /** @public
     * @property name
     * @type String
     * This will accept values supplied by a name attribute on the component HTML */
    @Prop() name: string;
    /** This will track state changes (I.e. whether the dropdown component is open or closed) */
    @State() toggle: boolean = false;
    /** @type EventEmitter
     * Track component events (I.e. activation of dropdown component)*/
    @Event() onToggle  : EventEmitter;

    /** @public
     * @method toggleComponent
     * This will manage the dropdown component event and state changes*/
    toggleComponent(): void {
       this.toggle = !this.toggle;
       // When the user click emit the toggle state value
       // A event can emit any type of value
       this.onToggle.emit({ visible: this.toggle });
       console.log('toggle',this.toggle);
    }

    /**  Create HTML representation of component DOM and return this for output to the browser DOM */
    render() {
       return (
	    <div>
            <h2 onClick={() => this. toggleComponent()}>
                {this.name} 
                {this.toggle ? <span>&#9650;</span> : <span>&#9660;</span>}
            </h2> 
	        <ul class={ this.toggle ? 'active' : 'inactive' }>
            {
                this.items.map(
                    item => <li><h3>{item.heading}</h3><p>{item.description}</p></li>
                )
            }
	        </ul>
        </div>
       )
    }
    /*
        The onClick function performs the following:
        1. Assign click event to heading tag to manage dropdown component activation
        2. Assign value for public property of name as the text for the <h2> tag
        3. Change which arrow 'icons' are displayed based on state change

        toggle:
        Use value of state change to determine whether component information 
        is displayed

        Iterate over the items:
        Build each component item with data supplied from the items 
        array using a map operator
    */
}