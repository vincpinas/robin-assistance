import { useState, useEffect } from 'react';
import CustomRadio from '../../Components/CustomRadio/CustomRadio';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import RubberSpan from '../RubberSpan/RubberSpan';
import { useContact } from '../../requests';
import { useLanguageContext } from '../Language/LanguageProvider';

function ContactForm() {
  const [mailStatus, setMailStatus] = useState<null | boolean>(null);
  const { dict } = useLanguageContext();

  const { mutate: reqContact, isLoading } = useContact({
    onSuccess: (data: any) => {
      console.log(data);
      setMailStatus(true);
      setTimeout(() => {
        setMailStatus(null);
      }, 3000);
    },
    onError: () => {
      setMailStatus(false);
      setTimeout(() => {
        setMailStatus(null);
      }, 3000);
    }
  })

  const lAF = (e: any) => {
    const parent = e.target.parentElement;
    parent.classList.remove('iF-label'); parent.classList.remove('iFe-label');
    if (e.target.value) parent.classList.add('iF-label');
    else parent.classList.add('iFe-label');
  }
  const lAB = (e: any) => {
    const parent = e.target.parentElement;
    parent.classList.remove('iF-label'); parent.classList.remove('iFe-label');
  }
  const [selected, setSelected] = useState("recruitment");

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      message: '',
      q_type: '',
    },
    validationSchema: Yup.object().shape({
      firstname: Yup.string().required('Firstname is required'),
      lastname: Yup.string(),
      email: Yup.string().email('Email is niet geldig').required('Email is required'),
      phone: Yup.string()
        .matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/g, 'Phone number is not valid'),
      message: Yup.string()
        .required('A message is required to be sent.')
        .min(10, 'A message has to be atleast 10 characters.'),
    }),
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: (values: any) => {
      const email = new URLSearchParams();
      Object.keys(values).forEach(function (key) {
        email.append(key, values[key])
      });
      reqContact(email);
    },
  });

  const lOC = (e: any) => {
    formik.handleChange(e);
    lAF(e);
  }

  useEffect(() => {
    formik.values.q_type = selected
  }, [selected, formik.values])

  return (
    <form id='contactForm' onSubmit={formik.handleSubmit}>
      <span className='inputRow'>
        <label htmlFor='firstname' className={formik.errors.firstname ? 'iFerr-label' : ''}>
          {dict.home.contact.firstname}*
          <input
            className={formik.errors.firstname ? 'iFerr-input' : ''}
            type='text' onFocus={lAF} onChange={lOC} onBlur={lAB}
            placeholder={dict.home.contact.firstname_placeholder} id='firstname'
            defaultValue={formik.initialValues.firstname}
          />
          {formik.errors.firstname && <span className='errorMessage'>{formik.errors.firstname}</span>}
        </label>
        <label htmlFor='lastname' className={formik.errors.lastname ? 'iFerr-label' : ''}>
          {dict.home.contact.lastname}
          <input
            className={formik.errors.lastname ? 'iFerr-input' : ''}
            type='text' onFocus={lAF} onChange={lOC} onBlur={lAB}
            placeholder={dict.home.contact.lastname_placeholder} id='lastname'
            defaultValue={formik.initialValues.lastname}
          />
          {formik.errors.lastname && <span className='errorMessage'>{formik.errors.lastname}</span>}
        </label>
      </span>
      <span className='inputRow'>
        <label htmlFor='email' className={formik.errors.email ? 'iFerr-label' : ''}>
          {dict.home.contact.email}*
          <input
            className={formik.errors.email ? 'iFerr-input' : ''}
            type='text' onFocus={lAF} onChange={lOC} onBlur={lAB}
            placeholder={dict.home.contact.email_placeholder} id='email'
            defaultValue={formik.initialValues.email}
          />
          {formik.errors.email && <span className='errorMessage'>{formik.errors.email}</span>}
        </label>
        <label htmlFor='phone' className={formik.errors.phone ? 'iFerr-label' : ''}>
          {dict.home.contact.phone}
          <input
            className={formik.errors.phone ? 'iFerr-input' : ''}
            type='text' onFocus={lAF} onChange={lOC} onBlur={lAB}
            placeholder={dict.home.contact.phone_placeholder} id='phone'
            defaultValue={formik.initialValues.phone}
          />
          {formik.errors.phone && <span className='errorMessage'>{formik.errors.phone}</span>}
        </label>
      </span>
      <div>
        <h4>
          <RubberSpan letters={dict.home.contact.question_first} margin={5} />
          <RubberSpan letters={dict.home.contact.question_second} margin={5} />
          <RubberSpan letters={dict.home.contact.question_third} margin={5} />
          <RubberSpan letters={dict.home.contact.question_fourth} margin={5} />
          <RubberSpan letters={dict.home.contact.question_fifth} margin={5} />
        </h4>
        <div className='customRadioContainer'>
          <CustomRadio text={dict.home.contact.subject_first} onChange={setSelected} selected={selected} value="recruitment" id="recruitment" />
          <CustomRadio text={dict.home.contact.subject_second} onChange={setSelected} selected={selected} value="webdesign" id="webdesign" />
          <CustomRadio text={dict.home.contact.subject_third} onChange={setSelected} selected={selected} value="other" id="other" />
        </div>
      </div>
      <span className='inputRow' id='messageRow'>
        <label htmlFor='message' className={formik.errors.message ? 'iFerr-label' : ''}>
          {dict.home.contact.message}*
          <input
            className={formik.errors.message ? 'iFerr-input' : ''}
            type='text' onFocus={lAF} onChange={lOC} onBlur={lAB}
            placeholder={dict.home.contact.message_placeholder} id='message'
            defaultValue={formik.initialValues.message}
          />
          {formik.errors.message && <span className='errorMessage'>{formik.errors.message}</span>}
        </label>
      </span>
      <button type='submit' disabled={isLoading}
        className={isLoading ? '-cta' : mailStatus === null ? '-cta' : mailStatus ? 'succces -cta' : 'error -cta'}
      >
        {dict.home.contact.send}
      </button>
    </form>
  )
}

export default ContactForm;
