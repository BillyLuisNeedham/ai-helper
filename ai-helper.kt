import java.io.File

fun main() {
    print("Choose guide or swiss (g/s): ")
    var choice = readLine()?.lowercase()

    while (choice != "g" && choice != "s") {
        println("Please input either 's' or 'g'.")
        print("Choose guide or swiss (g/s): ")
        choice = readLine()?.lowercase()
    }

    val questions = if (choice == "g") questionsForGuide else questionsForSwiss

    val answers = mutableListOf<String>()
    questions.forEachIndexed { index, question -> 
        print("$question ")
        val answer = readLine()
        val prefix = questions[index].split(".")
        val completeAnswer = "${prefix[0]}. $answer"
        answers.add(completeAnswer)
    }

    val file = File("answers.txt")
    
    println("\n\n")

    answers.joinToString("\n\n").also {
        println(it)
        file.writeText(it)
    }
}

private val questionsForGuide = listOf(
    "Goal. Example: Create a mobile app UI to help students manage their study schedules.",
    "User. Example: College students aged 18-25.",
    "Instruction. Example: The app should have features like a calendar, reminders, note-taking, and a timer for study sessions.",
    "Detail. Example: The app's design should be minimalistic, with a dark mode option and customizable themes.",
    "Example. Example: Consider apps like \"Forest\" & \"Scoolify\" that gamify the study process to keep students engaged."
)

private val questionsForSwiss = listOf(
    "1st Step.\n\nGive it a role: You are Spartacus, a pro copywriter",
    
    "2nd Step.\n\nDefine its job: Your job is to write copy for online media brands",
    
    "Third step.\n\nGive the AI the control: Now ask me all the questions that you need to know to write a perfect copy that'd align with my brand.",
    
    "4th step.\n\nDefine input: Users will ask you to write copy for their business, brand, or anything else. It's your job to ask questions first to clarify the task and then implement the copywriting process.",
    
    "Step 5.\n\nDefine output: You need to write in ______ style, start with the headline as a hook, write only ______ words per copy, make the copy persuasive, and use simple language",
    
    "Step 6.\n\nShare 3-5 examples of inputs and outputs."
)
