import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/Authprovider';
import useTitle from '../../hooks/useTitle';

const AddService = () => {
    useTitle('Add Service')

    const { user } = useContext(AuthContext);
    useTitle('Service Detail')


    // ---------
    const [service, setService] = useState({});

    const handleAddService = event => {
        event.preventDefault();
        console.log(service);
        fetch('http://localhost:5000/serviceadd', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Added successfully');
                    // event.target.reset();
                }
            })


    }

    const handleInputBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newService = { ...service }
        newService[field] = value;
        setService(newService);
    }

    //------------
    return (
        <div>
            <div className='flex justify-center my-12 py-12'>
                <div>
                    <h2 className='text-3xl text-center my-8 text-teal-500'>Add Service</h2>
                    <form onSubmit={handleAddService}>
                        <input onBlur={handleInputBlur} type="text" name='sName' placeholder='service name' required className="input input-bordered input-success w-full max-w-xs my-2" />
                        <br />
                        <input onBlur={handleInputBlur} type="text" name='description' placeholder='service detail' required className="input input-bordered input-success w-full max-w-xs my-2" />
                        <br />
                        <input onBlur={handleInputBlur} type="url" name="image" id="" placeholder='photo URL' required className="input input-bordered input-success w-full max-w-xs my-2" />
                        <br />
                        <input onBlur={handleInputBlur} type="number" name="rating" id="" placeholder='rating' required className="input input-bordered input-success w-full max-w-xs my-2" />
                        <br />
                        <input onBlur={handleInputBlur} type="number" name="price" id="" placeholder='price' required className="input input-bordered input-success w-full max-w-xs my-2" />
                        <br />
                        <button type="submit" className="btn btn-outline btn-success w-full max-w-xs my-2">Add Service</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;