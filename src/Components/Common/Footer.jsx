const Footer = () => {
  return (
    <div className="flex flex-row justify-between mb-[3vw] px-[7vw] font-[oswald] text-xl">
        <div className="flex flex-col">
            <div className="text-gray-600">
                Email
            </div>
            <div className="">
                nikhildhanda84@gmail.com
            </div>
        </div>

        <div className="flex items-end">
            developed by NIKHIL DHANDA
        </div>

        <div>
            <div className="text-gray-600">
                Socials
            </div>
            <div className="flex flex-row gap-3">
                <a href="https://www.linkedin.com/in/nikkhil-s-dhanda-00241a24a/">
                    LinkedIn
                </a>
                <a href="https://www.instagram.com/nikhildhanda005">
                Instagram
                </a>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
