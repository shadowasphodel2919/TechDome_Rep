import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FIELDS } from "../../config/fields"
import { useAddNewUserMutation } from "./usersApiSlice"
const USER_REGEX = /^[A-z]{3,20}$/
const PWD_REGEX = /^[A-z0-9!@#$%]{4,12}$/
const PNO_REGEX = /^\d{10}$/
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

const SignUp = () => {
    const [addNewUser, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useAddNewUserMutation()

    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [validUsername, setValidUsername] = useState(false)
    const [password, setPassword] = useState('')
    const [validPassword, setValidPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState(false)
    const [mobile, setMobile] = useState('')
    const [validMobile, setValidMobile] = useState(false)
    const [fields, setFields] = useState([""])

    useEffect(()=>{
        setValidUsername(USER_REGEX.test(username))
    }, [username])

    useEffect(()=>{
        setValidPassword(PWD_REGEX.test(password))
    }, [password])

    useEffect(()=>{
        setValidMobile(PNO_REGEX.test(mobile))
    }, [mobile])

    useEffect(()=>{
        setValidEmail(EMAIL_REGEX.test(email))
    }, [email])

    useEffect(()=>{
        if(isSuccess){
            setUsername('')
            setPassword('')
            setEmail('')
            setMobile('')
            setFields([])
            navigate('/login')
        }
    }, [isSuccess, navigate])

    const onUsernameChanged = e => setUsername(e.target.value)
    const onEmailChanged = e => setEmail(e.target.value)
    const onMobileChanged = e => setMobile(e.target.value)
    const onPasswordChanged = e => setPassword(e.target.value)

    const onFieldsChanged = e => {
        const values = Array.from(
            e.target.selectedOptions,
            (option) => option.value
        )
        setFields(values)
    }

    const canSave = [fields.length, validEmail, validMobile, validPassword, validUsername].every(Boolean) && !isLoading

    const onSubmit = async (e) => {
        e.preventDefault()
        if(canSave)
        await addNewUser({ username, password, email, mobile, fields})
    }

    const options = Object.values(FIELDS).map(field => {
        return (
            <option
                key = {field}
                value = {field}
            >{field}</option>
        )
    })

    const errClass = isError ? "errmsg" : "offscreen"
    const validUserClass = !validUsername ? 'form__input--incomplete' : ''
    const validEmailClass = !validEmail ? 'form__input--incomplete' : ''
    const validMobileClass = !validMobile ? 'form__input--incomplete' : ''
    const validPwdClass = !validPassword ? 'form__input--incomplete' : ''
    const validFieldClass = !Boolean(fields.length) ? 'form__input--incomplete' : ''

    const content = (
        <div className="form__main">
            <div className="form__content">
                <h2>Sign Up</h2>
            <p className={errClass}>{error?.data?.message}</p>

            <form className="form" onSubmit={onSubmit}>
                <label className="form__label" htmlFor="username">
                    Username: <span className="nowrap">[3-20 letters]</span></label>
                <input
                    className={`form__input ${validUserClass}`}
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="off"
                    value={username}
                    onChange={onUsernameChanged}
                />

                <label className="form__label" htmlFor="email">
                    Email: <span className="nowrap">[10-50 letters]</span>
                </label>
                <input
                    className={`form__input ${validEmailClass}`}
                    id="username"
                    type="text"
                    autoComplete="off"
                    value={email}
                    onChange={onEmailChanged}
                />

                <label className="form__label" htmlFor="mobile">
                    Mobile: <span className="nowrap">[10 digit number]</span>
                </label>
                <input
                    className={`form__input ${validMobileClass}`}
                    id="mobile"
                    name="mobile"
                    type="number"
                    autoComplete="off"
                    value={mobile}
                    onChange={onMobileChanged}
                />

                <label className="form__label" htmlFor="password">
                    Password: <span className="nowrap">[4-12 chars incl. !@#$%]</span></label>
                <input
                    className={`form__input ${validPwdClass}`}
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={onPasswordChanged}
                />

                <label className="form__label" htmlFor="fields">
                    ASSIGNED ROLES:</label>
                <select
                    id="fields"
                    name="fields"
                    className={`form__select ${validFieldClass}`}
                    multiple={true}
                    size="3"
                    value={fields}
                    onChange={onFieldsChanged}
                >
                    {options}
                </select>
                <div className="form__action-buttons">
                    <button
                        className="icon-button"
                        title="Save"
                        disabled={!canSave}
                    >
                        Submit
                    </button>
                </div>
            </form>
            </div>
        </div>
    )
    return content
}

export default SignUp