import React from "react";


export default function Order(props) {

   const { values, change, submit, errors } = props;

    const onChange = evt => {
        const { name, value } = evt.target;
        change(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit()
    }

    
    return (
        <div>
            <h2> Fill out the information below, please! </h2>
            <errors.name/>
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
                    >   
                        <option value=''>Select a Size</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>

                    </select>
                </label>
                <label> Topping 1
                    <input
                        type='radio'
                        name='civil'
                        value='Pepperoni'
                        onChange={onChange}
                        checked={values.topping1 === true}
                    />
                     <input
                        type='radio'
                        name='civil'
                        value='Ham'
                        onChange={onChange}
                        checked={values.topping1 === true}
                    />


                </label>
                <label> Topping 2
                    <input
                        type='radio'
                        name='topping2'
                        value='Banana Peppers'
                        onChange={onChange}
                        checked={values.topping2 === true}
                    />
                    <input
                        type='radio'
                        name='topping2'
                        value='Onions'
                        onChange={onChange}
                        checked={values.topping2 === true}
                    />
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
                <button id='order-button'>Submit</button>


               
            </form>

        </div>
    )


}