// src/utils/imageClickLogic.js

// Define stories corresponding to each correct order
const stories = {
	'goose,panda,basketball,singapore': "Chonk befriends Twinkle Panda in outer space. 'Howdy mate, would you like to play basketball?' 'Yes, I'd love to!' answers Twinkle Panda. Chonk destroys Twinkle Panda in a 10-1. 'Aww man, I lost the bet,' says Twinkle Panda. 'Would you like to come visit my hometown?' 'Sure, beats staying in outer space my whole life!' says Chonk. They both head to Singapore and continue their basketball adventures.",
	'goose,panda,singapore,basketball': "Chonk befriends Twinkle Panda in Singapore. 'Yo, what's up bro' says Chonk. 'Hey bro, what's up?' replies Twinkle Panda. 'The weather is absolute dog crap but despite that, it's the perfect place for not just you to live but also me. 'Oh, how come?' asks Twinkle Panda. People around Marina Bay Sands look at them two as if they're crazy. 'Look at that twinkly water. Plus you've got Kai Kai and Jia Jia.' 'You're right. Nothing beats home.' says Twinkle Panda.",
	'goose,singapore,panda,basketball': "Chonk takes a flight to Singapore to study abroad. He meets Twinkle Panda at National University of Singapore. They introduce themselves and have a nice conversation. 'So what's your major?' asks Chonk. 'I'm studying why my species isn't extinct yet. What about you?' 'Oh, I'm studying ways to invent teleportation, time travel, and cloning.' says Chonk. 'Oh interesting, what for?' asks Twinkle Panda. 'World domination!' exclaims Chonk. 'Oh.... ummmm okay.' says Twinkle Panda. 'Hey, wanna go play basketball?' asks Chonk. 'Sure, loser lose 10 bucks.' 'It's on', exclaims Chonk as his eyes widened with determination.",
	'goose,singapore,basketball,panda': "Chonk visits Singapore with a purpose of playing basketball with Luka. 'Yo Luka, what up what brings you here?' says Chonk as he gives Luka a bro hand shake and chest bump. 'Ah nothing much, just basketball competition. What about you?' 'Obviously to watch you compete!' 'Nice,' says Luka '... and attack you and make you a basketball goose.' 'What'd you say?' asked Luka. 'Nothin', said Chonk. During basketball game, Chonk met a panda. 'Hello, what's your name?' 'My name is Twinkle', said the panda. Chonk dies laughing at the name and embarasses himself in front of the entire crowd.",
	'goose,basketball,singapore,panda': "Chonk is playing basketball in Austin with the goose gang. 'Hey, would you guys like to visit Singapore?' asks Chonk. 'HONK!', replies everyone. The flock flies to the lion city that is Singapore and they quickly locate the basketbal courts. They scare and chase all the humans away as they pridefully stride into the gymnasium to see a group of pandas playing half court. 'Yo, wanna play a game?' asks Chonk. The most twinkly panda out of the all responds with 'You bet'. Little did the pandas know that that geese would beat them 9-1.",
	'goose,basketball,panda,singapore': "Chonk is playing basketball himself and wonders 'Man, wouldn't it be so much better if I was playing in a group?' He finds another animal around, who turns out to be a very twinkly panda. 'YO would you like to play basketball?' 'I don't know how to play basketball' the panda says. 'It's ok, I can teach you. I've been wanting to teach someone' The twinkly panda agrees. 'Oh wait but first, let's go to Singapore. I've always wanted to visit.' Chonk drags twinkly panda to Singapore to play basketball. 'Wow, basketball is very tough', says the twinkly panda. 'My goal is to make at least 15 shots today.' 'You got this', said Chonk who sees full potential in the twinkly panda at the NBA.",
	
	'panda,goose,basketball,singapore': "Twinkle Panda befriends a goose. 'Hello there, what's your name?' 'I'm Chonk! What's your name?' 'Hmmm, I feel like I've seen you somewhere before... are you that video game character?' asks Twinkle Panda. 'Well, I geuss I just have one of those faces' said Chonk as he heaves a sigh. 'Do you wanna play basketball?' asks Twinkle Panda. 'HONK!' honks Chonk. Twinkle Panda tries to kidnap Chonk because he wasn't listening to Twinkle Panda, so she took more extreme measures. Chonk woke up in a storage unit in Singapore with a basketball court. He happily obliged and beat Twinkle Panda in a game 10-0.",
	'panda,goose,singapore,basketball': "Twinkle Panda meets a silly goose in the neighborhood bothering humans. The panda witnesses the goose chasing people, stealing their slipper, and messing with their belongings. As a citizen of Singapore, Twinkle Panda reports the silly goose to the authority, earning the goose a 1-month ticket to jail. The silly goose fought his way against the police, but eventually gets taken by the police to prison. He messes with his inmates and destroys everyone at basketball, earning himself the nickname of the Slam Honk.",
	'panda,basketball,goose,singapore': "Twinkle Panda is playing basketball with her panda friends. A goose comes along and invites her to do a special dance at his wedding. 'Why would you like to invite me to your wedding?' 'Are you kidding me?' asked the goose, 'You're the one and only Twinkle Panda. I've seen your dances all over social media. I know it's you.' Twinkle Panda and the goose strikes a deal. They both fly out to Singapore, where the wedding is held. Twinkle Panda delivers a beautiful performance, blinding all the geese with her charm.",
	'panda,basketball,singapore,goose': "Twinkle Panda was playing basketball in Austin. 'Hmmm, I wonder how much more fun I'd have if I was playing basketball in Singapore. She invents teleportation and pops up in Singapore. She blinds everyone in her path until she bumps into a goose. 'Hey there, what's your name?' asked Twinkle Panda. 'My naem is silly goose.' Twinkle Panda laughed at his name, which the silly goose found offensive. He attacks Twinkle Panda, but she rejects it. 'Would you like to play basketball?' asks Twinkle Panda. 'HONK!' goes silly goose. They find all the courts taken, so they each took turns being the basketball hoop for each other.",
	'panda,singapore,basketball,goose': "Twinkle Panda lives in China and was given to Singapore as a gift. She was known as the Hoop Bear, so the zoo gave her a basketball hoop for her to play. This attracted a lot of visitors as a result. One day, a goose was visiting the zoo and spots the Hoop Bear. The goose immediately laser focuses his eyes on the hoop and breaks through the glass. All the humans are shocked to see the goose join Hoop bear to play basketball. To this day, they earn the title of Splash Gonda.",
	'panda,singapore,goose,basketball': "Twinkle Panda lives in the Singapore zoo. One night, she decided to break out of the zoo. Along the way, she met a goose who wanted to escape with her. As they tip toe around the zoo, Twinkle Panda whispers 'So why would you like to break out of the zoo?' 'I am basketball deprived.' said the goose. 'Would you like to go play basketball them?' asks Twinkle Panda. 'Is that even a question?' said the goose as he looked her in the eyes. They run off to an outdoor basketball court and play a game of basketball, which is a vibe neither of them have felt before.",

	'basketball,goose,panda,singapore': "bgps ",
	'basketball,goose,singapore,panda': "bgsp ",
	'basketball,singapore,goose,panda': "bsgp ",
	'basketball,singapore,panda,goose': "bspg ",
	'basketball,panda,singapore,goose': "bpsg ",
	'basketball,panda,goose,singapore': "bpgs "



	// Add more stories as needed
  };
  
  // Default story for incorrect orders
  const wrongOrderStory = "Oops! You clicked the images in the wrong order. Try again!";
  
  export { stories, wrongOrderStory };
  