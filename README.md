# Random Password Generator
UWA Web Dev Bootcamp - feb 2021

### https://github.com/Twistedmouse/Random-Password-Generator
### https://twistedmouse.github.io/Random-Password-Generator/

---
## The task at hand:
My task was basically to edit the code and create a password generator. <br> 
I had to follow the following critira:

![](Assets/screenshot/userStory.jpg)

---
## Screenshots and Decription:
What i did: <br>
First stage for me was the research phase. I watched afew videos on youtube to get a rough idea on how password generators work. <br>
I also found this article about password generators https://www.studytonight.com/post/building-a-password-generator-with-javascript <br>
Which didnt follow all the aceptance criteria but helped me work out how it was ment to work. 
<br>
<br>
At first i made my generator with check boxxes but then re read the acceptance critera and nocticed it said to use prompts. <br>
I also did research on form elements  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form which i added. then realised towards the end <br> i didnt really need the form element but it was still good practice to learn. <br>
Next I read about input elements https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input which was very importmant for my slider.<br>
<br>
The next step for me was to right some psuedo code to get an idea/plan of what i need to achieve. <br>

![](Assets/screenshot/psuedoCode.jpg)

I then wrote my form elements and input in my HTML (even thought i didnt need the form elemenet)

![](Assets/screenshot/inputEl.jpg)

I also went through the HTML to see what semantics I could change since it was all written with divs.<br>
Next I read about the lable element https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label and use it for my slider. <br>
I also added a copy button but removed it since it wasnt apart of the critiea. 

![](Assets/screenshot/copyBTN.jpg)

I also changed the position of my slider to put it in the center. I decided to remove the numberbox next to the slider to make it feel even more random. <br>

So now i started going through and working on the javascript I started with trying to set up the arrays for the characters in the passphrase. <br>
But first I had to research concat https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat. <br>
And I learnt about const to make my array constant variables. <br>
<br>
So I needed some varibles that were defined by arrays in the ascii table. I had to use concat for the Speical characters since they are all <br>
over the ascii table.<br> 

![](Assets/screenshot/array1.jpg)

I made a function to move through the ascii table so it didnt just read the array as two values 

![](Assets/screenshot/array2.jpg)

HOT TIP!: I use consol.log throughout my javascript to make sure my arrays were working and pretty much to check if everything was working before making the button function.  

![](Assets/screenshot/consoleArray.jpg)
<br>
As you can see the arrays dont read as strings. So I need to lear how to make these values into string values. <br>

![](Assets/screenshot/string.jpg)

We were givin some code to work with already so i didnt need to make the onclick function or writepassword function.<br>
I noticed there was no gerneratePassword function but there was one in the writePassword function. 

![](Assets/screenshot/writepass.jpg)

So i added a generatePassword function. <br>
And that is were most of the javascript was written.

![](Assets/screenshot/genPassfunc.jpg)

First I made if statements for my prompts.

![](Assets/screenshot/promptcodes.jpg)

<br>
this is how they appeard on the page: 

![](Assets/screenshot/prompt1.jpg)

![](Assets/screenshot/prompt2.jpg)

![](Assets/screenshot/prompt3.jpg)

![](Assets/screenshot/prompt4.jpg)

![](Assets/screenshot/prompt5.jpg)

![](Assets/screenshot/prompt6.jpg)

And finally i need a way for my characters to randomise then return the result.

![](Assets/screenshot/random.jpg)

with my randomiser i think if i had more time i would have added and else statement for if the password dosnt contain one of each character to then re-generate. but with my testing the probaility of nt getting one of each character even on the smaller slider numbers was very low.

I should also note my slider has a length variable to choose the length of the passphare.

![](Assets/screenshot/length.jpg)

I found it very interesting as well how the math.random for foor loop worked on the console: 

![](Assets/screenshot/randomarray.jpg)

<br> And that is my Random Pasword Generator. thank you.
