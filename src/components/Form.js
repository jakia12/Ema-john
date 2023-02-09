import React from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchForm = ({ value, setValue }) => {
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    return (
        <div className='text-center'>
            <Form className="d-flex me-auto justify-content-center my-3 py-3">
                <Form.Control
                    type="search"
                    value={value}
                    placeholder="Search"
                    className=" search_field"
                    aria-label="Search"
                    onChange={handleChange}
                />
                <Button variant="outline-success">Search</Button>
            </Form>
        </div>
    )
}

export default SearchForm
