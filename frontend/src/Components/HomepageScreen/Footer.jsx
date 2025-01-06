import React from 'react'

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <> 
        <div class="wave-container wave">
            <p>© {year}, Developed & Designed with ❤️ by <a className='footer_' target='_' href='https://619.github.io/_Portfolio/'> Alam</a></p>
        </div>
    </>
  )
}

export default Footer