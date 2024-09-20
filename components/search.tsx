export default function Search() {
  // Event handler to restrict input to numbers
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, ''); // Only allow numbers
  };
  return (
    <form className='flex flex-col sm:flex-row justify-center items-center gap-2 h-64 md:h-[600px] md:text-3xl px-2'>
      <label
        htmlFor='lego-search'
        className='text-white font-semibold bg-lego-red bg-opacity-80 p-4 rounded-md'>
        Search by set number:
      </label>

      <input
        type='search'
        id='lego-search'
        name='name'
        required
        className='p-4 rounded-md'
        pattern='[0-9]'
        title='Please enter numbers only'
        onInput={handleInput}
      />

      <button className='bg-lego-yellow text-black font-bold p-4 rounded-md'>
        Search
      </button>
    </form>
  );
}
