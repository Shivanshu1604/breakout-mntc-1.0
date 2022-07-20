import React from 'react'

function Rules() {
  return (
    <div className="container mx-auto px-2 py-10 min-h-full">
      <h1 className="text-4xl md:text-6xl font-display tracking-widest">
        Rules
      </h1>
      <ul className="my-8 flex flex-col text-lg md:text-xl font-mono gap-7 list-disc list-inside max-w-md md:mx-auto">
        <li>
          After you get into a room you will be provided with a link to download
          the question pdf file (one file for each room)
        </li>

        <li>
          All questions are sorted according to the increasing level of
          difficulty.
        </li>

        <li> Read the questions from the file and solve any number of questions from three questions.

        </li>

        <li>
          Questions have levels of difficulty and carry scores according to the
          difficulty level
        </li>

        <li>
        The tough question carries 50 points, the medium carries 30 and the easy carries 20 points.
        </li>

        <li>
          Solve and fill the answer in the text box provided below. Your
          question number will remain constant so you can leave the tab and
          return back when you are ready to submit
        </li>
        <li>
        The minimum of 50 points is needed to moves to next room.If you have less than 50 point,
        you can move to next room after having -10 points in your total score.
        </li>

        <li>Fill the correct answer and advance to the next room</li>

        <li>May the best win! Follow the leaderboard and MNTC socials</li>
      </ul>
    </div>
  )
}

export default Rules
