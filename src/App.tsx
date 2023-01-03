import React, { useEffect, useState } from 'react';
import UserData from './types/UserData';
import UserName from './components/UserName';
import UserNameChange from './components/UserNameChange';
import UserAge from './components/UserAge';
import UserAddress from './components/UserAddress';
import UserPicture from './components/UserPicture';
import './App.css';

// interface ApiProps {
//   picture: 'string',
//   first: 'string',
//   last: 'string',
//   name: 'string',
//   dob: 'string',
//   age: 'string',
//   number: 'string',
//   address: 'string',
//   city: 'string',
//   country: 'string',
// }

function App() {

  const [data, setData] = useState<UserData>({} as UserData);

  // const fetchData = async (url: string) : Promise<ApiProps> => {
  //   const response = await fetch(url)
  //   const data = await response.json()
  //   return data?.results[0]
  // }

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const value = event.currentTarget.value
    setData({ ...data, name: value })
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://randomuser.me/api/')
      const data = await response.json()
      const firstUser = data?.results[0]

      setData(() => {
        const fullname = `${firstUser.name.first} ${firstUser.name.last}`;
        return {
          picture: firstUser?.picture.large,
          name: fullname,
          age: firstUser.dob.age,
          number: firstUser.location.street.number,
          address: firstUser.location.street.name,
          city: firstUser.location.city,
          country: firstUser.location.country,
        }
      })
    }
    fetchData();
  }, [])

  // useEffect(() => {
  //   const apiData = fetchData('https://randomuser.me/api/');
  //     setData(async (prev) => {
  //     const fullname = `${apiData.name.first} ${apiData.name.last}`;
  //     return {
  //       ...prev,
  //       picture: apiData.picture.large,
  //       name: fullname,
  //       age: apiData.dob.age,
  //       number: apiData.location.street.number,
  //       address: apiData.location.street.name,
  //       city: apiData.location.city,
  //       country: apiData.location.country,
  //       }
  //     })
  // },[]);

  const refreshPage = () =>{
    window.location.reload();
  }

  return (
    <>
      <h1>Random Users React Application</h1>
      <main>
        <article>
          <UserName data={data} />
          <UserNameChange data={data} changeHandler={changeHandler} />
          <UserAge data={data} />
          <UserAddress data={data} />
        </article>
        <aside>
          <UserPicture data={data} />
          <button onClick={refreshPage}>Click for Next User</button>
        </aside>
      </main>
    </>
  );
}

export default App;
