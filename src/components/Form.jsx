import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import * as Yup from 'yup';

const Form = ({lightMode, setTask, task}) => {

  const formik = useFormik({
    initialValues: {
      title: '',
      desc: "",
      dueDate: ""
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is Required"),
      desc: Yup.string().required('please give a description'),
      dueDate: Yup.string().required('Please give a due date')
    }),
    onSubmit:  (values) => {
      
        let file = [...task]
    file.push({
      id: new Date().getTime(),
      title: values.title,
      Desc: values.desc,
      dueDate: values.dueDate,
      completed: false
    })
    setTask(file)
    formik.resetForm()
    }
  })
  const err = ()=>{
    toast.error(formik.errors)
  }
  const normal = "w-1/2 px-4 py-2  mt-10 rounded outline-none"
  const normal2 = "w-3/4 px-4 py-2 rounded outline-none"
  return (
    <form onSubmit={(e)=>{
      e.preventDefault()
      formik.isValid ? formik.handleSubmit() : err()
    }} className="mb-5">
      <div >
        <input
        className={lightMode ? `bg-white text-black ${normal} placeholder-black-500 mb-2` : `bg-gray-800 text-white ${normal} placeholder-white-500 mb-2`}
          aria-label="Enter a TItle..."
          type="text"
          name="title"
          placeholder="Enter a Title..."
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="off"
        />
        <div className="flex items-center mb-2">
        <input
        className={lightMode ? `bg-white text-black ${normal2} placeholder-black-500 ` : `bg-gray-800 text-white ${normal2} placeholder-white-500`}
        aria-label="Enter a Desc..."
        type="text"
        name="desc"
        placeholder="Enter a Desc..."
        value={formik.values.desc}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        autoComplete="off"
        />
        <span className="datepicker-toggle">
        <span className="datepicker-toggle-button"></span>
        <input type="date" className="datepicker-input " name="dueDate" value={formik.values.dueDate} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        </span>
          
        </div>
        <div className="text-red-500">
        {formik.touched.title && formik.errors.title || formik.touched.dueDate && formik.errors.dueDate ?(<div>{formik.errors.title}</div>) : 
        (<div>
          {formik.errors.dueDate}
            </div>)}
        
        </div>
        <button className="bg-green-600 px-3 py-2 rounded-lg disabled:bg-green-300" disabled={!formik.isValid}>Add Task</button>
      </div>
      <ToastContainer />
    </form>
   
  );
};

export default Form;
