"use client";

import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';
import { CgSpinner } from 'react-icons/cg'

interface IFormInput {
  name: string;
  description: string;
}

export default function FormCategory() {
  const { register, handleSubmit, setError, formState: { errors } } = useForm<IFormInput>();
  const [loading, setLoading] = useState<boolean>(false)

  const onSubmit = async (data: IFormInput) => {
    setLoading(true)

    const response = await axios.post('/api/category', {
      name: data.name
    })

    if (response.data.status == 422) {
      setError('name', { message: "response.data.errors.name" })
      setError('description', { message: "response.data.errors.description" })
    }

    setLoading(false)
  }



  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 mt-8 gap-x-5 gap-y-8 max-md:grid-cols-1">
      <div className='space-y-3'>
        <label htmlFor="input-name" className="x-label">Enter The Name Category <span className='requeued'>*</span></label>
        <input {...register("name", { required: "The Name Category is Requeued" })} id="input-name" className="x-input" placeholder="Name" />
        <span className="block text-red-500">{errors.name && (errors.name.message)}</span>
      </div>
      <div className='space-y-3'>
        <label htmlFor="input-description" className="x-label">Enter The Description Category <span className='requeued'>*</span></label>
        <textarea {...register("description", { required: "The Description Category is Requeued" })} id="input-description" className="x-input" placeholder="Description" />
        <span className="block text-red-500">{errors.description && (errors.description.message)}</span>
      </div>
      <div className='flex items-center justify-center'>
        <button className="btn-create-update" disabled={loading}>
          {loading ?
            <CgSpinner className="w-12 h-8 mx-auto animate-spin" />
            : "Create Category"}
        </button>
      </div>
    </form>
  )
}