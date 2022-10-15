import Head from 'next/head'
import { useState } from "react";
import Button from "../components/Button"
import Input from "../components/Input"
import InputPassword from "../components/InputPassword"
import Label from "../components/Label"
import Select from "../components/Select"
import Checkbox from '../components/Checkbox';
import Radio from '../components/Radio';
import TextArea from '../components/TextArea';
import BackToTop from '../components/BackToTop';
import Navbar from '../components/Navbar';
import { validateFormObject } from '../validations/form';

export default function Home() {

  const [submitted, setSubmitted] = useState(false)
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    bio: "",
    gender: "male",
    red: false,
    blue: false,
    fruit: "",
  })
  const [error, setError] = useState()

  function handleInputChange(e) {
    if (e.target.type == 'checkbox') {
      if (e.target.checked) {
        setData({
          ...data, [e.target.name]: true
        })
      } else {
        setData({
          ...data, [e.target.name]: false
        })
      }
    } else {
      setData({ ...data, [e.target.name]: e.target.value })
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const { valid, errors } = await validateFormObject(data);
    if (!valid) {
      setError(errors)
      setSubmitted(false)
      return
    }
    setError(null)
    setSubmitted(true)
  }

  function handleReset(e) {
    e.preventDefault()
    setSubmitted(false)
    setData({
      name: "",
      email: "",
      password: "",
      bio: "",
      gender: "male",
      red: false,
      blue: false,
      fruit: "",
    })
    setError(null)
  }

  return (
    <div>
      <Head>
        <title>Next Playwright Form</title>
        <meta name="description" content="Next Playwright Form" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="dark:bg-neutral-900 min-h-screen pb-8">

        <Navbar />

        <BackToTop />

        <div className="max-w-5xl mx-auto p-4">

          <h1 className="text-3xl text-neutral-800 dark:text-white font-semibold tracking-wide mb-8 mt-4">
            Playwright Form
          </h1>

          <div className="grid sm:grid-cols-2 sm:space-x-8">

            <form onSubmit={handleSubmit}>

              <Label htmlFor="name" className="font-semibold">Name</Label>
              <Input type="text" id="name" name="name" value={data.name} onChange={handleInputChange} placeholder='Name' />
              <p className="text-xs text-red-500 mb-5 mt-2">{error?.name}</p>

              <Label htmlFor="email" className="font-semibold">Email</Label>
              <Input type="text" id="email" name="email" value={data.email} onChange={handleInputChange} placeholder='Email' />
              <p className="text-xs text-red-500 mb-5 mt-2">{error?.email}</p>

              <Label htmlFor="password" className="font-semibold">Password</Label>
              <InputPassword type="password" id="password" name="password" value={data.password} onChange={handleInputChange} placeholder='Password' />
              <p className="text-xs text-red-500 mb-5 mt-2">{error?.password}</p>

              <Label htmlFor="bio" className="font-semibold">Bio</Label>
              <TextArea type="text" name="bio" id="bio" value={data.bio} onChange={handleInputChange} placeholder='Bio' />

              <Label className="font-semibold mb-2">Gender</Label>
              <Radio label="Male" name="gender" value="male" onChange={handleInputChange} checked={data.gender == "male"} />
              <Radio label="Female" name="gender" value="female" onChange={handleInputChange} checked={data.gender == "female"} />

              <Label className="font-semibold mt-5 mb-2">Color</Label>
              <Checkbox label="Red" name="red" onChange={handleInputChange} />
              <Checkbox label="Blue" name="blue" onChange={handleInputChange} />

              <Label className="font-semibold mt-5 mb-2">Fruit</Label>
              <Select name="fruit" onChange={handleInputChange}>
                <Select.option hidden>Select Fruit</Select.option>
                <Select.option value="apple">Apple</Select.option>
                <Select.option value="grape">Grape</Select.option>
              </Select>

              <Button type="submit" value="submit" className="mt-4">Submit</Button>
              <Button.secondary type="reset" onClick={handleReset} className="mt-4 ml-4">Reset</Button.secondary>

            </form>

            {submitted &&
              <div className="dark:text-white text-sm my-8 sm:my-0 space-y-2">
                <p className="font-medium mb-1.5 text-base">Data</p>
                <p>Data Name : {data.name}</p>
                <p>Data Email : {data.email}</p>
                <p>Data Password : {data.password}</p>
                <p>Data Bio : {data.bio}</p>
                <p>Data Gender : {data.gender}</p>
                <p>Data Color : {data.red && "red,"} {data.blue && "blue"}</p>
                <p>Data Fruit : {data.fruit}</p>
              </div>
            }

          </div>

        </div>
      </main>
    </div>
  )
}
