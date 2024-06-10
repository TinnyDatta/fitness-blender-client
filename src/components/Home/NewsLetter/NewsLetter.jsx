
// const NewsLetter = () => {
//     return (
//         <div className="my-10">
//             <div>
//             <h2 className="text-[#CD5C5C] text-center my-2 text-xl">Newsletter</h2>
//             <p className="text-4xl text-[#8A3324] text-center">Subscribe for getting more benefit </p>
//         </div>
//         </div>
//     );
// };

// export default NewsLetter;

import{ useState } from 'react';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    const response = await fetch('https://fitness-blender-server.vercel.app/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, name }),
    });

    const data = await response.json();

    if (response.ok) {
      setMessage('Subscription successful!');
      setEmail('');
      setName('');
    } else {
      setMessage(`Subscription failed: ${data.error}`);
    }
  };

  return (
    <div className='my-10'>
        <div>
            <h2 className="text-[#CD5C5C] text-center my-2 text-xl">Newsletter</h2>
            <p className="text-4xl text-[#8A3324] text-center">Subscribe for getting more benefit </p>
        </div>
      <div className='my-8 bg-[#CD5C5C] text-center h-52 py-16'>
      <h2 className='pb-5 text-2xl text-white'>Subscribe to our Newsletter</h2>
      <form onSubmit={handleSubmit}>
        <input className='mx-4 border-red-300 py-2 rounded-lg'
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input className='border-red-300 py-2 rounded-lg'
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button className='bg-white py-2 px-4 rounded-full text-[#CD5C5C] ml-4' type="submit">Subscribe</button>
      </form>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
};

export default NewsLetter;
