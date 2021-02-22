import Form from './Form'

const Hero = () => {
    const data = [
        "The Bulldog, also known as the English Bulldog or British Bulldog, is a medium-sized dog breed. It is a muscular",
        "hefty dog with a wrinkled face and a distinctive pushed-in nose",
        "The Kennel Club, the American Kennel Club, and the United Kennel Club oversee breeding records."
    ]

    return (
        <div className="border border-gray-200 md:flex md:flex-row">
            <div className="text-center  md:w-1/3">
                <img src="./b.jpg" alt="network rack" className=" mx-auto" />
            </div>
            <div className="px-4 py-4 md:px-8 self-center md:w-3/4">
                <h2 className="text-gray-700 font-bold text-2xl mb-3">BULLDOG</h2>
                <ul>
                    {
                        data.map((item,i) => <li key={i} className="flex opacity-70 my-2">
                            <svg className="min-w-icon max-w-icon mr-2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                viewBox="0 0 512 512" style={{ enableBackground: "0 0 512 512" }}>
                                <path d="M256,0C161.896,0,85.333,76.563,85.333,170.667c0,28.25,7.063,56.26,20.49,81.104L246.667,506.5 c1.875,3.396,5.448,5.5,9.333,5.5s7.458-2.104,9.333-5.5l140.896-254.813c13.375-24.76,20.438-52.771,20.438-81.021 C426.667,76.563,350.104,0,256,0z M256,256c-47.052,0-85.333-38.281-85.333-85.333c0-47.052,38.281-85.333,85.333-85.333 s85.333,38.281,85.333,85.333C341.333,217.719,303.052,256,256,256z" />
                            </svg>
                            {item}
                        </li>
                        )
                    }
                </ul>
                <Form title="hello from the hero"/>
            </div>

        </div>
    )
}

export default Hero
