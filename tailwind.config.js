/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
  theme: {
    extend: {
        fontFamily:{
            poppins:['poppins','sans-serif']
        },
        container:{
            center:true,
            padding:'1rem',
            screens:{
                'sm': "512px",
                'md': "720px",
                'lg': "1024px",
                'xl': "1140px",
                '2xl': "1320px"
            }
        },
        backgroundImage:{
            'hero-img' : "url('https://t4.ftcdn.net/jpg/03/10/26/27/360_F_310262727_laUeq9XnEmT5W8EfFXVtDioU8wVPehGG.jpg')"
        }
    },
  },
  plugins: [],
}
