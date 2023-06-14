import { useState } from "react";

const Button = ({ text, handleClick }) => {
    return <button onClick={handleClick}> {text} </button>;
};

const App = () => {
    const ancedotes = [
        "If it hurts, do it more often.",
        "Adding manpower to a late software project makes it later!",
        "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        "Premature optimization is the root of all evil.",
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
        "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
        "The only way to go fast, is to go well.",
    ];

    const [selected, setSelected] = useState(0);
    const [points, setPoints] = useState(Array(8).fill(0));
    // We need to update the selected as index and update the array points without mutation

    const copyPoints = [...points];
    // console.log(copyPoints);

    const handleNextClick = () => {
        // console.log(points);
        // const newSelected = selected + 1;
        // setSelected(newSelected)
        // console.log(newSelected);
        if (selected === ancedotes.length - 1) return;
        const newSelected = selected + 1;
        setSelected(newSelected); // TO UPDATE SELECTED = newSelected
        // console.log(newSelected, points[newSelected])

        // console.log(selected); //because update State is asynchronous => update selected value by new constant
        // setSelected(selected + 1)
        // console.log(selected);
    };

    const handleBackClick = () => {
        if (selected === 0) return;
        const newSelected = selected - 1;
        setSelected(newSelected);
        // console.log(newSelected, points[newSelected])
    };
    // const copy = [...points]
    // increment the value in position 2 by one
    // copy[2] += 10
    // copy[1] += 21
    // copy[0] += 13
    // console.log(copy);

    const handleVoteClick = () => {
        copyPoints[selected] += 1;
        setPoints(copyPoints);
        // console.log(points);
        // console.log(selected, points[selected]);

        // setSelected(selected)
        // console.log(selected);
        // copy[selected] += 1
        // console.log(copy);
    };

    // const MostVotes = () => {
    //     if (points.reduce((acc, cur) => acc + cur, 0))
    //         return (
    //             ancedotes[points.indexOf(Math.max(...points))]
    //             <p>Has {Math.max(...points)} votes</p>
    //             )
    //     else return <p>Vote to see the most voted quote</p>;
    // };

    return (
        <div>
            <h1>Anecdote of the day</h1>
            {ancedotes[selected]}
            {/* {console.log(selected, ancedotes.length)} */}
            <br />
            <p>Total votes: {points[selected]} </p>
            <Button handleClick={handleVoteClick} text="Vote" />
            <Button handleClick={handleBackClick} text="Back" />
            <Button handleClick={handleNextClick} text="Next" />

            <h1>Anecdote with most votes</h1>

            
            {(points.reduce((acc, cur) => acc + cur, 0)) ? ancedotes[points.indexOf(Math.max(...points))] +  ` Has ` + Math.max(...points) +" votes" : "Please vote to see the most voted"}
        </div>
    );
};

export default App;
