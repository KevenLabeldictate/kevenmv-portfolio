'use client'
import React from 'react'
import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

interface form {
    name   : string;
    email  : string;
    message: string;
}

const Contact = () => {


/**********************************************************************
 * TODO function to send info
 * @param {form} params 
*/
    const sendForm = (params: form) => { 
        console.log(params)
    }

    //Validate form
    const formSchema = Yup.object().shape({
        name: Yup.string()        
            .required('email is required'),
        email: Yup.string()
                .email()
                .required(),
        message: Yup.string()
            .required(),
    
    });
  return (
    <section id="contact" className='bg-blue-500 text-white'>
        <div className='p-10 md:pt-20'>
            <div className='flex flex-col justify-center'>
                <h2 className='text-2xl lg:text-4xl font-bold uppercase text-center mb-8'>Contact </h2>
                <p className='text-lg/7 md:text-2xl/7 text-center lg:pl-32 lg:pr-32 mb-14'>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible </p>              
            </div>

            <div className="mx-0 sm:32 md:32 lg:mx-40 bg-white p-5 rounded-md drop-shadow shadow-xl shadow-gray-600/50">
                <h2 className="text-2xl font-semibold mb-4">Formulario de ejemplo</h2>
                <Formik
                    initialValues={{ 
                        name   : '',
                        email  : '',
                        message: '',
                    }}
                    validationSchema={formSchema}
                    onSubmit={(values, actions) => sendForm(values)}
                >
                    {({values, setFieldValue}) => (
                    <Form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <Field
                                className="appearance-none bg-gray-200 border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-800"
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Enter your name"
                            />
                            <ErrorMessage name="name" component="div" className='text-red-700 font-bold'/>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                email
                            </label>
                            <Field
                                className="appearance-none bg-gray-200 border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-800"
                                id="email"
                                name="email"
                                type="text"
                                placeholder="Enter your email"
                            />
                            <ErrorMessage name="email" component="div" className='text-red-700 font-bold'/>
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                Message:
                            </label>
                            <Field
                                as='textarea'
                                rows={10}
                                className="appearance-none bg-gray-200 border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-800"
                                id="message"
                                name="message"
                                type="text"
                                placeholder="Message..."
                            />
                        </div>

                        {/* Botón de Envío */}
                        <button
                            className="bg-blue-500 hover:bg-blue-700 hover:-translate-y-1 duration-300 text-white font-bold py-3 px-12 rounded focus:outline-none focus:shadow-outline uppercase shadow-lg shadow-gray-500/50"
                            type="submit"
                        >
                            Submit
                        </button>
                    </Form>
                )}
                </Formik>
                {/* Input de Texto */}
                
            </div>
        </div>

      
    </section>
  )
}

export default Contact