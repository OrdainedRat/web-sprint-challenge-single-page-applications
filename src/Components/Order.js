import React from "react";


export default function Order(props) {

   const { values, change, submit, errors } = props;

    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const realValue = type === 'checkbox' ? checked : value
        change(name, realValue)
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit()
    }

    
    return (
        <div>
            <h2> Fill out the information below, please! </h2>
            <p>{errors.name}</p>
            <form id='pizza-form' onSubmit={onSubmit}>
                <label> Name
                    <input
                        type='text'
                        name='name'
                        value={values.name}
                        onChange={onChange}
                        id='name-input'
                    />
                </label>
                <label> Please Select a Size
                    <select
                        value={values.size}
                        name='size'
                        onChange={onChange}
                        id='size-dropdown'
                    >   
                        <option value=''>Select a Size</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>

                    </select>
                </label>

                                                            {/*Checkboxes*/}

                <label> Toppings: 
                    <label> Pepperoni
                        <input
                            type='checkbox'
                            name='pepperoni'
                            onChange={onChange}
                            checked={values.pepperoni}
                        />
                    </label>
                    <label> Ham
                        <input
                            type='checkbox'
                            name='ham'
                            onChange={onChange}
                            checked={values.ham}
                        />
                    </label>
                    <label> 
                        <input
                            type='checkbox'
                            name='bananaPeppers'
                            onChange={onChange}
                            checked={values.bananaPeppers}
                        />
                    </label>    
                    <label> 
                        <input
                            type='checkbox'
                            name='onions'
                            onChange={onChange}
                            checked={values.onions}
                        /> 
                    </label>        
                </label>
                
                <label> Special Instructions
                    <input
                        type='text'
                        name='special'
                        value={values.special}
                        onChange={onChange}
                        id='special-text'
                    />
                </label>
                
                                                                        {/*Submit*/}

                <button id='order-button'>Submit</button>


               
            </form>

        </div>
    )


}