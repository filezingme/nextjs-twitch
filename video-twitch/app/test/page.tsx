"use client"

const TestPage = () => {

    const onClick = () => {
        console.log("Something")
    }

    return (
        <div onClick={onClick}>
            Helle Test Page
        </div>
    )
}
export default TestPage