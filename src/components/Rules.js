import React from 'react'

function Rules() {
  return (
    <div className="container mx-auto px-2 py-10">
      <h1 className="text-4xl md:text-6xl font-display tracking-widest">
        Rules
      </h1>
      <ul className="my-8 flex flex-col text-lg md:text-xl font-mono gap-7 list-disc list-inside max-w-md md:mx-auto">
        <li>
          After you get into a room you will be provided with a link to download
          the question pdf file (one file for each room)
        </li>

        <li>Read the questions from the file and solve one question</li>

        <li>
          Questions have levels of difficulty and carry scores according to the
          difficulty level
        </li>

        <li>
          The tough question carries 3 points, the medium carries 2 and the easy
          carries 1 point
        </li>

        <li>
          Solve and fill the answer in the text box provided below. Your
          question number will remain constant so you can leave the tab and
          return back when you are ready to submit
        </li>

        <li>Fill the correct answer and advance to the next room</li>
      </ul>
    </div>
  )
}

export default Rules
