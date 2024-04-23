import React from 'react'

const colorClasses = {
    red: "bg-red-500 hover:bg-red-700",
    blue: "bg-blue-500 hover:bg-blue-700",
    green: "bg-green-500 hover:bg-green-700"
}

function Button({children, color="blue", className="", ...props}) {
  
    const buttonClasses = `text-white font-bold py-2 px-4 rounded ${colorClasses[color] || colorClasses.blue}  ${className}`;

    return (
    <button className={buttonClasses}{...props}>
    {children}
    </button>
  )
}

export default Button
