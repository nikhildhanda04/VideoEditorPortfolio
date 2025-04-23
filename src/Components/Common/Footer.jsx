const Footer = () => {
  return (
    <div className="flex flex-row justify-between mb-[3vw] px-[7vw] font-[oswald] text-[1.2vw]">
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
                <a 
                className="hover:text-blue-800"
                href="https://www.linkedin.com/in/nikkhil-s-dhanda-00241a24a/">
                    LinkedIn
                </a>
                <a 
                className="hover:text-blue-800"
                href="https://www.instagram.com/nikhildhanda005">
                Instagram
                </a>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
