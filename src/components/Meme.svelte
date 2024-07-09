<script>
    let answered = false;
    const memes = [
        "When you fix a bug without introducing two new ones.",
        "When your code finally compiles after hours of debugging.",
        "When you refactor your colleague's spaghetti code into something readable.",
        "When your code works on the first try and you feel like a genius.",
        "When you comment '// Fix later' and it becomes a permanent fixture.",
        "When you find a StackOverflow solution with zero upvotes that saves your day.",
        "When you forget a semicolon and spend hours searching for the syntax error.",
        "When the client keeps changing the requirements after you've finished coding.",
        "When you realize you've been debugging for hours only to find it was a typo.",
        "When you finally understand a complex algorithm after staring at it for hours.",
        "When you accidentally delete a critical file and have to retrieve it from Git history.",
        "When your code passes all tests in development but crashes in production.",
        "When you refactor a piece of code and it breaks something unrelated.",
        "When you accidentally push your API keys to a public repository.",
        "When your codebase is a mix of camelCase, snake_case, and kebab-case.",
        "When your IDE suggests a variable name that's more creative than anything you could come up with.",
        "When you google an error message and realize you're the only person on Earth to have encountered it.",
        "When you write a script to automate a task that takes longer to write than to do manually.",
        "When you discover a new programming language and suddenly want to rewrite everything in it.",
        "When you implement a feature and the QA finds 10 bugs within the first hour.",
        "When your code finally works, but you're not entirely sure why.",
        "When you use 'git blame' to find out who wrote that piece of spaghetti code.",
        "When you're the only one laughing at a programming joke during standup.",
        "When your code breaks in production and you realize you forgot to log errors.",
        "When your code is so clean you consider framing it on your wall.",
        "When you spend more time choosing the right variable names than writing the actual code.",
        "When you comment 'TODO: Write tests' and never get around to it.",
        "When you explain recursion to someone and watch as their eyes glaze over.",
        "When you refactor legacy code and it feels like untangling Christmas lights.",
        "When you fix a bug you introduced last week and pretend it never happened.",
        "When your boss says 'Can you just...' and you know it's not going to be simple.",
        "When you see a comment in the code that says 'Magic happens here'.",
        "When you realize you've been coding for 12 hours straight without a break.",
        "When you find a bug that's been in the codebase for years.",
        "When you get excited about using a new programming language feature and overuse it.",
        "When you accidentally close your IDE and realize you haven't saved in hours.",
        "When you join a new project and spend the first week just understanding the codebase.",
        "When you spend hours on a single line of code only to realize you were using the wrong operator.",
        "When you refactor a huge function into smaller ones and feel like a coding god.",
        "When you forget to add a return statement and spend an hour figuring out why nothing is happening.",
        "When you use a library and later find out it's deprecated and unsupported.",
        "When you hear a non-programmer say 'Just build it like Facebook.'",
        "When you use a ternary operator inside another ternary operator just because you can.",
        "When your code gets praised in a code review and you feel like you've won an award.",
        "When you refactor code and reduce the lines by 50% but increase its complexity by 200%.",
        "When you discover a bug that only happens on Fridays at 4:59 PM.",
        "When you spend an hour debugging to find out you didn't press save.",
        "When you write a comment in your code that says 'I'm sorry.'",
        "When you're convinced that your code is bug-free until it goes into production.",
        "When your manager asks for a time estimate and you just stare blankly at your screen.",
        "When you're debugging and decide to try a solution that's absolutely ridiculous but somehow works.",
        "When you explain to someone that programming is not just 'typing on a computer'.",
        "When your code gets deleted because someone pushed the wrong branch to production.",
        "When you find out that 'working code' and 'good code' are not always the same thing.",
        "When you search for a solution and end up on page 20 of Google search results.",
        "When you have three cups of coffee and decide to refactor the entire project at 3 AM.",
        "When you fix a bug by commenting out a line of code and have no idea why it worked.",
        "When you refactor code and then realize you forgot to test it again.",
        "When you accidentally delete the production database and watch your life flash before your eyes.",
        "When you refactor code and spend more time thinking of new variable names than actually writing code.",
        "When you leave a 'TODO: Fix this mess later' and it becomes someone else's problem.",
        "When you find a workaround for a bug and hope no one ever asks how it works.",
        "When you fix a bug that has been haunting the team for months and become the hero of the day.",
        "When you use a regular expression and feel like a wizard casting a spell.",
        "When you inherit a project with zero documentation and the original developer is on a permanent vacation.",
        "When your program compiles without errors but crashes immediately at runtime.",
        "When your project manager changes the requirements again and you contemplate changing careers.",
        "When you refactor code and introduce a bug that only appears on the production server.",
        "When you see a comment that says 'This should never happen' right before it happens.",
        "When you refactor code and reduce the complexity but increase the number of bugs.",
        "When you fix a bug and it mysteriously reappears a week later.",
        "When you optimize code for performance and end up making it slower.",
        "When you write a piece of code and it feels like poetry.",
        "When you come up with a clever variable name that makes your colleagues laugh.",
        "When you refactor code and end up breaking a feature that was working perfectly.",
        "When you realize you've been debugging a problem caused by a typo for hours.",
        "When you find a typo in the comments and wonder how many are in the actual code.",
        "When you create a script to automate a task and end up spending more time maintaining it.",
        "When you use 'git blame' to find out who wrote that 'temporary fix' three years ago.",
        "When you realize that writing documentation takes longer than writing the actual code.",
        "When you fix a bug and pray that it didn't introduce two new bugs.",
        "When you spend hours figuring out why your code isn't working and realize you forgot to import a module.",
        "When you use 'console.log' for debugging and forget to remove it before deploying.",
        "When your code works perfectly in the demo but fails spectacularly in production.",
        "When you refactor code and delete a comment that turns out to be crucial.",
        "When you spend an entire day debugging and the problem turns out to be a misplaced comma.",
        "When you write a script that saves you hours of work and feel like you've cheated time itself.",
        "When your code is so elegant you consider framing it instead of deploying it.",
        "When you write code that's so convoluted you're not sure even you understand it anymore.",
        "When you're convinced you've found the perfect design pattern for your project.",
        "When you realize that 'it works on my machine' is not a valid excuse.",
        "When you refactor code and forget to run the tests again.",
        "When you fix a bug in the backend only to realize it was caused by a CSS issue.",
        "When you're asked to estimate how long a task will take and you know you'll be wrong.",
        "When you copy and paste code from StackOverflow and pray it works without understanding it.",
        "When you try to merge branches and end up spending the entire day resolving conflicts.",
        "When you're writing code and your rubber duck gives you a blank stare.",
        "When you use a library for a specific feature and end up rewriting half of it to fit your needs.",
        "When you realize that programming is 90% debugging and 10% writing code.",
        "When you refactor code and introduce a bug that only appears when it's raining.",
        "When you spend an hour fixing a bug only to find out it was caused by a typo in a variable name.",
        "When your manager suggests adding 'some AI' to the project as if it's a magic spell.",
        "When you realize that your codebase is a monument to all your past mistakes.",
        "When you refactor code and break the build right before the deadline.",
        "When you discover that the 'temporary fix' you implemented six months ago is still in production.",
        "When you find a bug and wonder if it's worth fixing or if you should just rewrite everything.",
        "When you refactor code and accidentally delete the wrong file.",
        "When you finally understand a concept after watching ten different YouTube tutorials.",
        "When you try to explain to your family what you do and they still think you fix printers.",
        "When you realize that you've been working on a feature branch that was merged months ago.",
    ];
    function getRandomIndex(min, max) {
        min = Math.ceil(min); // Round up from min (inclusive)
        max = Math.floor(max); // Round down from max (inclusive)
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let meme = memes[getRandomIndex(0, memes.length)];
</script>

{#if answered}
    <div class="answer">
        <h1>{meme}</h1>
    </div>
{:else}
    <div class="question">
        <h1>Are you a programmer?</h1>
        <button on:click={() => (answered = true)}>Yess!</button>
        <button on:click={() => (answered = true)}>Noo!</button>
    </div>
{/if}

<style>
    .answer h1 {
        color: red;
        font-size: medium;
    }
    .answer {
        border: 2px solid rgb(0, 255, 0);
        padding: 10px;
        width: 100%;
    }
</style>
