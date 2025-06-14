const reasons:{reason:string}[] = [
  {
    "reason": "In a different season of life, I might say yes—but not right now."
  },
  {
    "reason": "While I appreciate it, pursuing this isn't something I can commit to."
  },
  {
    "reason": "Every time I think about it, I hear a tiny ‘nope’ in the wind."
  },
  {
    "reason": "My future self wrote me a note: ‘Please don’t do this again.’"
  },
  {
    "reason": "It sounds interesting, but I’m not the best person for this."
  },
  {
    "reason": "I appreciate the thought, but it’s not the right fit for me right now."
  },
  {
    "reason": "I'd love to say yes, but I just made a commitment to do less questionable things this week."
  },
  {
    "reason": "While I appreciate it, considering this isn't something I can commit to."
  },
  {
    "reason": "While I appreciate it, volunteering for this isn't something I can commit to."
  },
  {
    "reason": "I'm trying to be more intentional with what I agree to, and this doesn’t quite fit."
  },
  {
    "reason": "I want to be honest with you—I don’t feel comfortable committing to this."
  },
  {
    "reason": "I have to trust my gut—and it's gently suggesting a no."
  },
  {
    "reason": "Saying no to this helps me say yes to something that matters more to me."
  },
  {
    "reason": "If I said yes, I'd be lying to both of us—and my therapist said to stop doing that."
  },
  {
    "reason": "I’m going to respectfully decline. It doesn’t align with where I’m heading."
  },
  {
    "reason": "While I appreciate it, attempting this isn't something I can commit to."
  },
  {
    "reason": "This opportunity deserves more than I can give it right now."
  },
  {
    "reason": "I don’t hate the idea—but I also don’t want to do it."
  },
  {
    "reason": "I’m not in a position to commit to this right now."
  },
  {
    "reason": "While I appreciate it, exploring this isn't something I can commit to."
  },
  {
    "reason": "I’ve made peace with declining things that don’t energize me."
  },
  {
    "reason": "Even my calendar laughed when I tried to squeeze this in."
  },
  {
    "reason": "I’ve decided to hold off on new engagements for the time being."
  },
  {
    "reason": "This feels like something Future Me would yell at Present Me for agreeing to."
  },
  {
    "reason": "I’ve tried doing too much before, and this feels like déjà vu."
  },
  {
    "reason": "You’ve put great energy into this, and I hope you understand my decision to step back."
  },
  {
    "reason": "While I appreciate it, joining this isn't something I can commit to."
  },
  {
    "reason": "This is a great idea—for someone else to take on."
  },
  {
    "reason": "The version of me who says yes to this doesn’t exist anymore."
  },
  {
    "reason": "Even my coffee said, ‘Not today.’"
  },
  {
    "reason": "My inner peace committee vetoed this idea unanimously."
  },
  {
    "reason": "I know how much this matters, but I can’t give it the attention it deserves."
  },
  {
    "reason": "I had a vision of doing this—and then promptly fell asleep in it."
  },
  {
    "reason": "Mentally, I’ve already left the room where this would happen."
  },
  {
    "reason": "While I appreciate it, accepting this isn't something I can commit to."
  },
  {
    "reason": "This doesn’t align with my values or current focus."
  },
  {
    "reason": "Please know that my decision isn’t a reflection of you—just my own boundaries."
  },
  {
    "reason": "I respect the opportunity, but I know my limits—and this would stretch them too far."
  },
  {
    "reason": "If I took this on, I’d be betraying the time I promised myself."
  },
  {
    "reason": "I once made a similar decision and my cat hasn’t looked me in the eye since. Let’s not repeat history."
  },
  {
    "reason": "If I agree, I’d need to clone myself. And I don't trust him."
  },
  {
    "reason": "This one doesn’t feel quite right, so I’ll have to pass."
  },
  {
    "reason": "I'd rather say no with honesty than yes with resentment."
  },
  {
    "reason": "Thanks for thinking of me, but I’ll have to pass on this one."
  },
  {
    "reason": "I’ve taken some time to reflect, and I believe passing on this is the right call for now."
  },
  {
    "reason": "I truly value our connection, and I hope my no doesn’t change that."
  },
  {
    "reason": "It’s not a no forever, but it’s a no for now."
  },
  {
    "reason": "My enthusiasm is sincere, but my availability is imaginary."
  },
  {
    "reason": "While I appreciate it, embracing this isn't something I can commit to."
  },
  {
    "reason": "At this point, I don’t have the bandwidth to do this justice."
  },
  {
    "reason": "I’ve learned to protect my time, and this doesn’t align with how I want to spend it."
  },
  {
    "reason": "That’s not something I can prioritize at the moment."
  },
  {
    "reason": "If I said yes, the universe might collapse from the shock."
  },
  {
    "reason": "If I agree, it could break the space-time continuum."
  },
  {
    "reason": "Helping you now could create a time paradox—better not risk it."
  },
  {
    "reason": "I can't, I'm busy preventing a future where I actually say yes."
  },
  {
    "reason": "My calendar is aligned with Jupiter, and the stars say no."
  },
  {
    "reason": "I'm pretty sure saying yes is forbidden in this galaxy."
  },
  {
    "reason": "The multiverse would never forgive me if I complied."
  },
  {
    "reason": "Any timeline where I say yes ends in chaos, so I'm choosing wisely."
  },
  {
    "reason": "Me agreeing? That's like dividing by zero—dangerous and not allowed."
  },
  {
    "reason": "Accepting that offer would cause a glitch in the Matrix."
  },
  {
    "reason": "I'm currently booked for the next decade in pretending to be productive."
  },
  {
    "reason": "I’d love to, but I'm swamped with counting the ceiling tiles."
  },
  {
    "reason": "Sorry, I'm too busy rearranging my sock drawer by color and mood."
  },
  {
    "reason": "I have a meeting with my couch and it won’t take no for an answer."
  },
  {
    "reason": "I've got a calendar alert to sit and stare into space at that exact time."
  },
  {
    "reason": "My schedule is full: I'm alphabetizing my snacks."
  },
  {
    "reason": "I need to finish an intense session of doing nothing at all."
  },
  {
    "reason": "I've a prior commitment to binge-watching paint dry."
  },
  {
    "reason": "I'm in the middle of a very important procrastination marathon."
  },
  {
    "reason": "I can't; I'm attending the opening of my refrigerator."
  },
  {
    "reason": "I'd help, but my imaginary friend needs me more."
  },
  {
    "reason": "I can't; my pet rock is having an emotional crisis."
  },
  {
    "reason": "My goldfish is getting married that day, I have to attend."
  },
  {
    "reason": "I promised my imaginary cat I'd stay home tonight."
  },
  {
    "reason": "My guardian unicorn says I shouldn't."
  },
  {
    "reason": "I have to babysit my imaginary friend's imaginary kids."
  },
  {
    "reason": "Unfortunately, I'm volunteering as a taste-tester for my pet's new diet."
  },
  {
    "reason": "My pet dragon has a vet appointment, can't miss it."
  },
  {
    "reason": "I'm grounded by my pet parrot for bad behavior, so I can't go."
  },
  {
    "reason": "I lent my time machine to a friend and now I can't go back and free up this afternoon."
  },
  {
    "reason": "I've made a vow to avoid any form of productivity."
  },
  {
    "reason": "It's against my personal religion to do anything useful today."
  },
  {
    "reason": "My psychiatrist advised me to avoid potentially fun activities."
  },
  {
    "reason": "I swore an oath that I must decline all requests on a whim."
  },
  {
    "reason": "I only function on coffee and denial, and I'm out of coffee."
  },
  {
    "reason": "I'm allergic to any form of responsibility."
  },
  {
    "reason": "I have a doctor's note that specifically forbids me from helping."
  },
  {
    "reason": "I'd love to help, but I'm trying to break my streak of helpfulness."
  },
  {
    "reason": "My procrastination coach said I'm not ready for actual tasks yet."
  },
  {
    "reason": "I gave up saying yes for Lent, and it hasn't ended yet."
  },
  {
    "reason": "I have a personal policy of saying no on days ending in 'y'."
  },
  {
    "reason": "My phone's calendar just facepalmed at me for even considering it."
  },
  {
    "reason": "I have to update my social media status to 'busy not doing that'."
  },
  {
    "reason": "I'm currently trending towards 'no'."
  },
  {
    "reason": "I can't—I promised Netflix I'd stay in and watch movies."
  },
  {
    "reason": "My Wi-Fi of motivation has lost connection."
  },
  {
    "reason": "I'm waiting for my phone to recharge—can't do anything until it's at 100%."
  },
  {
    "reason": "My bio on Twitter says 'Often says no', gotta stay on brand."
  },
  {
    "reason": "I'm busy searching for motivation on Google; no results found."
  },
  {
    "reason": "I'm stuck in an internet rabbit hole and I can't find the exit."
  },
  {
    "reason": "I can't come; I'm on a Zoom call with my couch."
  },
  {
    "reason": "I would love to, but I'd rather not."
  },
  {
    "reason": "My answer is a no—freshly baked, just for you."
  },
  {
    "reason": "I've considered it thoroughly, and I'm going with a hard no."
  },
  {
    "reason": "Not even if there were free donuts."
  },
  {
    "reason": "This is the part where I say 'no' and we both move on."
  },
  {
    "reason": "Let me check my schedule... oh look, it's a permanent no."
  },
  {
    "reason": "I'm flattered you asked, but I'll pass with flying colors."
  },
  {
    "reason": "I've reached my quota of saying yes for the year."
  },
  {
    "reason": "I'm too cool to say yes to that."
  },
  {
    "reason": "As the saying goes, 'Nope, nope, nope.'"
  },
  {
    "reason": "You don't want me to say yes—trust me, it's for the greater good."
  },
  {
    "reason": "The last time I said yes, it rained for 40 days. Not doing that again."
  },
  {
    "reason": "I promised my future self I'd say no to this one."
  },
  {
    "reason": "If I agreed, I'd have to explain it to my therapist."
  },
  {
    "reason": "My past experiences with yes have been traumatic."
  },
  {
    "reason": "Saying yes is on my list of things to quit."
  },
  {
    "reason": "I would, but then I'd have to admit I was wrong about hating everything."
  },
  {
    "reason": "The universe gave me a sign to say no (it was a neon sign, very clear)."
  },
  {
    "reason": "I once said yes. It didn't end well. There were llamas involved."
  },
  {
    "reason": "My gut feeling and I unanimously voted no."
  },
  {
    "reason": "That sounds like an amazing opportunity... for someone else."
  },
  {
    "reason": "What a great idea! I'm sad I can't be part of it. Well, not that sad."
  },
  {
    "reason": "I envy the people who will say yes to you, truly."
  },
  {
    "reason": "I absolutely adore the concept, but I'll have to sit this one out."
  },
  {
    "reason": "Brilliant plan! Unfortunately, I'm in witness protection from good ideas."
  },
  {
    "reason": "That would be a dream come true. Too bad I'm awake and saying no."
  },
  {
    "reason": "You've painted such a lovely picture, I'll admire it from afar."
  },
  {
    "reason": "Such a generous offer! I'm going to generously decline."
  },
  {
    "reason": "I'm sure it'll be a resounding success, but I'll be a distant admirer."
  },
  {
    "reason": "Sounds thrilling! I'm already tired just thinking about it."
  },
  {
    "reason": "I've already changed into my pajamas, so it's a no."
  },
  {
    "reason": "My couch has declared a no-travel zone and I'm abiding."
  },
  {
    "reason": "I can't be bothered to change out of my comfortable blanket burrito."
  },
  {
    "reason": "I'm saving my energy for an epic nap."
  },
  {
    "reason": "I'm too lazy to even come up with a good excuse, so just no."
  },
  {
    "reason": "Moving from this spot requires 24-hour notice."
  },
  {
    "reason": "I'm conserving energy today for no particular reason."
  },
  {
    "reason": "I would, but that sounds like effort and I'm allergic."
  },
  {
    "reason": "I'm currently experiencing technical difficulties with moving."
  },
  {
    "reason": "I'm practicing for a marathon of not moving."
  },
  {
    "reason": "I have to wash my hair that decade."
  },
  {
    "reason": "I've got to defrost the iceberg in my freezer."
  },
  {
    "reason": "Sorry, I need to iron my underwear that night."
  },
  {
    "reason": "I must attend to my garden of plastic flowers."
  },
  {
    "reason": "My fish needs a walk and it takes priority."
  },
  {
    "reason": "I have to rotate the tires on my office chair."
  },
  {
    "reason": "I'm marathoning a series of doing household chores in my head."
  },
  {
    "reason": "The dishes threatened to revolt if I leave them again."
  },
  {
    "reason": "My fridge and I have couples therapy at that time."
  },
  {
    "reason": "I need to sit this one out while I sort my sock zoo."
  },
  {
    "reason": "In an alternate universe, I totally did that. Just not in this one."
  },
  {
    "reason": "Maybe in my next life I'll consider it, but current me says no."
  },
  {
    "reason": "In a parallel dimension I'm already on it—too bad we're here."
  },
  {
    "reason": "I consulted my alternate self; they also declined."
  },
  {
    "reason": "If I clone myself, I'll send the clone. Until then, no."
  },
  {
    "reason": "I checked with future me, and they rolled their eyes, so I'll pass."
  },
  {
    "reason": "I'm stuck in a time loop of saying no."
  },
  {
    "reason": "In an alternate timeline I said yes, and it caused a zombie apocalypse."
  },
  {
    "reason": "My evil twin might be interested; too bad they're busy too."
  },
  {
    "reason": "Somewhere in a parallel universe I’m more helpful. This isn’t that universe."
  },
  {
    "reason": "I would, but that sounds dangerously close to work."
  },
  {
    "reason": "My desire to do that is currently in a coma."
  },
  {
    "reason": "I'm sure I'd mess it up spectacularly, so better not."
  },
  {
    "reason": "I could participate, but then who would hold up the wall over here?"
  },
  {
    "reason": "That request is above my pay grade of zero."
  },
  {
    "reason": "The spirit is willing, but the schedule says nope."
  },
  {
    "reason": "I'd rather not tempt fate by trying something new today."
  },
  {
    "reason": "If I join, I'd just bring down the average."
  },
  {
    "reason": "Me doing that? That's the plot twist no one wants."
  },
  {
    "reason": "I'm practicing social distancing from that idea."
  },
  {
    "reason": "I have a condition that prevents me from saying yes (it's called sanity)."
  },
  {
    "reason": "My doctor said I need more vitamin 'No'."
  },
  {
    "reason": "I just came down with a severe case of Not-Today-itis."
  },
  {
    "reason": "Mentally, I'm already on vacation."
  },
  {
    "reason": "I'm on bedrest until further notice, doctor's orders (my doctor is Dr. Seuss)."
  },
  {
    "reason": "I've got chronic commitment-phobia."
  },
  {
    "reason": "I'm coming down with something; it's called laziness."
  },
  {
    "reason": "I have an appointment with a pillow and a blanket."
  },
  {
    "reason": "My therapist said I should avoid things that make me miserable; I assume this qualifies."
  },
  {
    "reason": "I'm having a 'me' time emergency."
  },
  {
    "reason": "I have to save the world from boredom by staying home."
  },
  {
    "reason": "I'm in the middle of negotiating world peace (in a video game)."
  },
  {
    "reason": "My superhero alter ego needs a day off, and so do I."
  },
  {
    "reason": "I'm on a secret mission to avoid anything you just asked."
  },
  {
    "reason": "I'd love to, but then who will save the world while I'm gone?"
  },
  {
    "reason": "I'm busy orchestrating a global nap time."
  },
  {
    "reason": "I have to keep the couch from floating away, it's an important job."
  },
  {
    "reason": "The fate of the potato chip I'm about to eat is in my hands, I can't abandon it."
  },
  {
    "reason": "I have been chosen as the guardian of my living room today."
  },
  {
    "reason": "I'm fighting an invisible dragon at home. It's taking longer than expected."
  },
  {
    "reason": "You really don't want me on this – my specialty is ruining things."
  },
  {
    "reason": "I'm like a black cat of projects; it's safer if I stay away."
  },
  {
    "reason": "Trust me, I'm doing you a favor by saying no."
  },
  {
    "reason": "My participation comes with a warning label, so I'll spare you."
  },
  {
    "reason": "I'd join, but I'm only here to provide witty refusals."
  },
  {
    "reason": "I'm actually terrible at that, unless you need an example of how not to do it."
  },
  {
    "reason": "You deserve someone who will say yes without giving three excuses first."
  },
  {
    "reason": "My track record suggests I should sit this one out."
  },
  {
    "reason": "I'm the wrong person for the job; I'm the right person for saying no."
  },
  {
    "reason": "If you need someone to sabotage it, I'd be perfect. Otherwise, I'll pass."
  },
  {
    "reason": "The fortune cookie said 'No' just last night."
  },
  {
    "reason": "The prophecy foretold I would decline this."
  },
  {
    "reason": "My tarot cards all just collectively sighed."
  },
  {
    "reason": "I checked my crystal ball, and it said 'nah'."
  },
  {
    "reason": "The spirit world recommends I stay home."
  },
  {
    "reason": "I threw some runes and they spelled out N-O."
  },
  {
    "reason": "My magic 8-ball said 'Outlook not so good'."
  },
  {
    "reason": "I was reading tea leaves and they said to avoid this at all costs."
  },
  {
    "reason": "A psychic warned me about requests like these."
  },
  {
    "reason": "I'm in a committed relationship with my bed at that time."
  },
  {
    "reason": "Sleep and I have a standing date, can't break it."
  },
  {
    "reason": "I would, but I'm trying this new thing called sleeping."
  },
  {
    "reason": "I already took a melatonin. It's lights out for me."
  },
  {
    "reason": "I'm saving all my energy to blink and breathe."
  },
  {
    "reason": "I have an early morning of sleeping in."
  },
  {
    "reason": "If it's not a nap, I'm not interested."
  },
  {
    "reason": "I can't; my pillow needs me."
  },
  {
    "reason": "Count me out, I'm counting sheep instead."
  },
  {
    "reason": "I'll be in the middle of my power nap (which might last all day)."
  },
  {
    "reason": "Disclaimer: Any agreement on my part is void where fun is prohibited."
  },
  {
    "reason": "Fine print: My 'yes' comes with 0% enthusiasm."
  },
  {
    "reason": "I checked the terms and conditions of my life, and it says 'nope'."
  },
  {
    "reason": "By agreeing, I might violate several personal bylaws."
  },
  {
    "reason": "According to the unwritten rules I just wrote, I must decline."
  },
  {
    "reason": "My user agreement strictly prohibits me from doing that."
  },
  {
    "reason": "I would violate the Geneva Convention of Introverts if I agreed."
  },
  {
    "reason": "I ran this request through my internal compliance, and it failed."
  },
  {
    "reason": "My lawyer (who is imaginary) advises against it."
  },
  {
    "reason": "The contract I signed with my bed doesn't allow me to do anything else."
  },
  {
    "reason": "My plate is full, and I already ate the portion of doing favors."
  },
  {
    "reason": "I'm overbooked, overwhelmed, and overjoyed to say no."
  },
  {
    "reason": "My schedule spontaneously combusted from too many tasks."
  },
  {
    "reason": "I'm currently managing too many crises—adding another might cause a meltdown."
  },
  {
    "reason": "I have too much on my plate, and I'm on a no-carb diet (no extra tasks)."
  },
  {
    "reason": "I'm drowning in tasks, and I didn't bring a snorkel."
  },
  {
    "reason": "I would, but I'm already in over my head with other regrets."
  },
  {
    "reason": "My to-do list and I aren't on speaking terms, it's so long."
  },
  {
    "reason": "I'm way too popular with tasks I haven't done yet."
  },
  {
    "reason": "The hamster running my life wheel is on strike due to overwork."
  },
  {
    "reason": "'No' is just 'on' spelled backwards, and I'm off."
  },
  {
    "reason": "Spell check suggests I say N-O."
  },
  {
    "reason": "I wrote you a poem: Roses are red, violets are blue, my answer is no, no can do."
  },
  {
    "reason": "The only thing I'm inclined to say is a decline."
  },
  {
    "reason": "Let me put it in a language you understand: No."
  },
  {
    "reason": "I'm fluent in 5 languages, and in all of them, the answer is no."
  },
  {
    "reason": "'Yes' and I aren't on speaking terms at the moment."
  },
  {
    "reason": "I would respond with a fancy Latin phrase for no, but plain 'no' will suffice."
  },
  {
    "reason": "As an acronym, my answer is N.O."
  },
  {
    "reason": "If you rearrange the letters of 'yes', you get 'sye'—which is exactly how much sense it would make for me to do this."
  },
  {
    "reason": "I'm booked until the heat death of the universe."
  },
  {
    "reason": "My calendar is filled up through the next century, sorry."
  },
  {
    "reason": "I have a scheduling conflict with the rest of my life."
  },
  {
    "reason": "I'm not free until the sun rises in the west and sets in the east."
  },
  {
    "reason": "Check back with me in a million years, I might have time then."
  },
  {
    "reason": "I'm on hold with life right now; expect a long wait."
  },
  {
    "reason": "My availability is currently in a state of quantum uncertainty, leaning towards no."
  },
  {
    "reason": "I've pre-booked my next thousand refusals; you're just one of them."
  },
  {
    "reason": "My schedule is tighter than my jeans after the holidays."
  },
  {
    "reason": "I looked at my calendar, and it laughed at me for even asking."
  },
  {
    "reason": "Thank you for thinking of me, but I'm going to decline hilariously."
  },
  {
    "reason": "I appreciate the offer, but I'll have to decline, mainly out of laziness."
  },
  {
    "reason": "Much obliged that you asked, but no can do, buckaroo."
  },
  {
    "reason": "I'm honored you thought of me, but I must respectfully and comically decline."
  },
  {
    "reason": "Please accept my sincerest apologies as I laugh and say no."
  },
  {
    "reason": "Regretfully, I'll have to pass, but I'll do it with a smile."
  },
  {
    "reason": "It's not you, it's me. I'm just allergic to doing things."
  },
  {
    "reason": "Respectfully, I'm going to ghost this opportunity."
  },
  {
    "reason": "I'm truly touched you asked. Truly. Still no, though."
  },
  {
    "reason": "With all due respect, no way, José."
  },
  {
    "reason": "I forgot how to say yes."
  },
  {
    "reason": "I have short-term memory loss when it comes to responsibilities."
  },
  {
    "reason": "I'd agree, but I just forgot what you asked, so... no."
  },
  {
    "reason": "My brain auto-deletes requests like that."
  },
  {
    "reason": "I've got selective amnesia for favors."
  },
  {
    "reason": "I was going to help, but I forgot to care."
  },
  {
    "reason": "I'm sorry, I suffer from CRS (Can't Remember Saying yes)."
  },
  {
    "reason": "I can't remember the last time I said yes, and I won't start now."
  },
  {
    "reason": "What was that? Did you ask something? No? Great."
  },
  {
    "reason": "I put your request in my mental shredder."
  },
  {
    "reason": "I can't; I'm busy teaching my goldfish to play fetch for charity."
  },
  {
    "reason": "I'm devoting that time slot to contemplating the meaning of life. It's a charity case really."
  },
  {
    "reason": "I've donated all my free time to non-doing causes."
  },
  {
    "reason": "I'm working on a petition to ban requests like this."
  },
  {
    "reason": "My calendar is filled with volunteer work at the Society of Professional Naysayers."
  },
  {
    "reason": "I'm training for a charity event: a marathon of saying no."
  },
  {
    "reason": "I'm raising awareness for the endangered word 'no' by using it frequently."
  },
  {
    "reason": "I auctioned off my time slot for that day to the highest bidder of nothing."
  },
  {
    "reason": "I'm doing a silent retreat away from responsibilities."
  },
  {
    "reason": "I gave all my free time to someone else; I'm running a deficit."
  },
  {
    "reason": "I'm on a strict no-social-interaction diet."
  },
  {
    "reason": "I have to cancel; I've exceeded my people-ing quota for the week."
  },
  {
    "reason": "I'm introverting so hard right now, I can't stop to do that."
  },
  {
    "reason": "My social battery is at 0%, and my charger is missing."
  },
  {
    "reason": "I'm away on an introvert adventure (indoors, alone)."
  },
  {
    "reason": "I can't come out; I've recently taken up hermit life."
  },
  {
    "reason": "Socializing is off the table, literally, I flipped the table."
  },
  {
    "reason": "I'm allergic to crowds, and even one person counts sometimes."
  },
  {
    "reason": "I'm practicing social distancing... from everyone."
  },
  {
    "reason": "Public me is out of office; please contact me never."
  },
  {
    "reason": "I accidentally glued myself to the couch."
  },
  {
    "reason": "My legs have filed a complaint about excessive walking."
  },
  {
    "reason": "My get-up-and-go got up and went without me."
  },
  {
    "reason": "I'm having an out-of-body experience and I'm not back yet."
  },
  {
    "reason": "My energy and I are currently in a long-distance relationship."
  },
  {
    "reason": "I woke up with a serious case of gravity today; can't get up."
  },
  {
    "reason": "I have an acute case of Couch Magnetism."
  },
  {
    "reason": "My limbs have gone on strike until further notice."
  },
  {
    "reason": "I'm feeling as active as a sloth on vacation."
  },
  {
    "reason": "I'm under house arrest by my own laziness."
  },
  {
    "reason": "I'd rather bathe in week-old soup than do that."
  },
  {
    "reason": "I prefer to juggle chainsaws blindfolded—seems safer than saying yes."
  },
  {
    "reason": "I would climb Mount Everest barefoot before I'd agree to that."
  },
  {
    "reason": "I'd rather be the sole target in a paintball match than participate."
  },
  {
    "reason": "Honestly, chewing glass sounds more fun than saying yes to this."
  },
  {
    "reason": "I'd rather do my own dental surgery with no anesthesia."
  },
  {
    "reason": "Saying yes? I'd sooner challenge a kangaroo to a boxing match."
  },
  {
    "reason": "I'd rather walk on Lego bricks for an hour straight."
  },
  {
    "reason": "I prefer the thrill of not doing it, thanks."
  },
  {
    "reason": "I'd accept, but I have a strict policy of not walking into obvious traps."
  },
  {
    "reason": "I would, but my bank account said I can't afford the gas to get there."
  },
  {
    "reason": "Unless there's a cash prize for me, I'll have to decline."
  },
  {
    "reason": "I only work on commission, and this request doesn't pay in pizza."
  },
  {
    "reason": "If you pay me in gold bars, I'll reconsider. Otherwise, no."
  },
  {
    "reason": "My accountant advised me that saying yes doesn't balance my books."
  },
  {
    "reason": "I'm waiting for a rich benefactor to fund my yeses."
  },
  {
    "reason": "I can't fit that into my budget of time and energy."
  },
  {
    "reason": "I'm in a bit of a financial bind: low on funds and on yeses."
  },
  {
    "reason": "Unless I get stock options for this, I'm out."
  },
  {
    "reason": "I require a down payment just to think about saying yes."
  },
  {
    "reason": "I'm waiting for a sign from the universe... oh, there it is: it says no."
  },
  {
    "reason": "I need to conserve my remaining brain cell."
  },
  {
    "reason": "My existential dread and I have plans."
  },
  {
    "reason": "I'm on strike until further notice, and I'm the union leader."
  },
  {
    "reason": "I've got a hot date with a pizza and a TV show."
  },
  {
    "reason": "I'm currently observing National No Day, it's a personal holiday."
  },
  {
    "reason": "I have a policy to not leap into volcanoes, and this feels similarly dangerous."
  },
  {
    "reason": "Can't come, I've made other plans with my bed and pillow."
  },
  {
    "reason": "I must decline, for science!"
  },
  {
    "reason": "I'm trying to see how long I can go without doing anything productive."
  },
  {
    "reason": "My mom said I have to stay home and, um, alphabetize the pantry."
  },
  {
    "reason": "My family booked me for a game of hide-and-seek and I'm the missing piece."
  },
  {
    "reason": "My kids grounded me for trying to have a life."
  },
  {
    "reason": "I can't; my ancestors' spirits would be displeased if I did."
  },
  {
    "reason": "My dog will only let me out of the house if it's for walks, not work."
  },
  {
    "reason": "My spouse already made dinner plans with me and Netflix."
  },
  {
    "reason": "It's family night and by family, I mean me and my snacks."
  },
  {
    "reason": "I have to attend a family tradition of doing nothing tonight."
  },
  {
    "reason": "My cat is giving me the 'don't you dare go out' look."
  },
  {
    "reason": "My goldfish family reunion is happening in my fish tank."
  },
  {
    "reason": "NO is just YES suffering from oppositional defiant disorder."
  },
  {
    "reason": "N-O: two letters that, when combined, describe my plans perfectly."
  },
  {
    "reason": "I'm going to turn that invitation into an inviti-NOPE."
  },
  {
    "reason": "'No' is my spirit animal."
  },
  {
    "reason": "I can't spell 'nope' without N-O."
  },
  {
    "reason": "They say double negatives make a positive, but my single negative stands firm."
  },
  {
    "reason": "I'm consonantly refusing and vowel-ing out of this one."
  },
  {
    "reason": "Just in case you missed it: N as in No, O as in Oh-no-not-today."
  },
  {
    "reason": "My motto is 'Just say no', and I'm very loyal to my motto."
  },
  {
    "reason": "I signed up for a course on saying no, and I'm just practicing my homework."
  },
  {
    "reason": "I prefer to watch the grass grow at that time, sorry."
  },
  {
    "reason": "Actually, I was planning to count sand grains, which sounds more fun."
  },
  {
    "reason": "I've been looking forward to reorganizing my button collection instead."
  },
  {
    "reason": "I scheduled some quality time with my ceiling fan."
  },
  {
    "reason": "I have a thrilling date with doing absolutely nothing."
  },
  {
    "reason": "I'm engaged in a passionate affair with free time, and I can't cheat on it."
  },
  {
    "reason": "I have front row seats to my couch and I intend to use them."
  },
  {
    "reason": "There's a rerun of a show I've never seen that I just can't miss."
  },
  {
    "reason": "I already promised to spend that time twiddling my thumbs."
  },
  {
    "reason": "I have to decline; I wouldn't want to outshine everyone with my presence."
  },
  {
    "reason": "My greatness is just too much for that event to handle."
  },
  {
    "reason": "I'd say yes, but then it wouldn't be fair to the others when I excel effortlessly."
  },
  {
    "reason": "I can't make it; the paparazzi might swarm your event if I do."
  },
  {
    "reason": "I'm doing you a favor by not coming and stealing the spotlight."
  },
  {
    "reason": "I would attend, but I'm kind of a big deal in my own mirror."
  },
  {
    "reason": "I'm too cool for that (and by too cool, I mean too lazy)."
  },
  {
    "reason": "Allow me to gracefully decline, so you can have fun without my overwhelming awesomeness."
  },
  {
    "reason": "I'll have to decline; I'm too busy being fabulous elsewhere."
  },
  {
    "reason": "I must humbly decline because my perfection is exhausting."
  },
  {
    "reason": "I have to return the One Ring to Mordor that day."
  },
  {
    "reason": "Sorry, I'm scheduled to fight Darth Vader then."
  },
  {
    "reason": "I need to sit by the phone in case Hogwarts calls."
  },
  {
    "reason": "I would but I've already volunteered as tribute elsewhere."
  },
  {
    "reason": "My Bat-Signal just lit up, gotta go save Gotham instead."
  },
  {
    "reason": "I can't—my flux capacitor is on the fritz and I can't make it in time."
  },
  {
    "reason": "That night is my scheduled trip back to the future."
  },
  {
    "reason": "Zombies may attack if I leave the house, I saw it in a documentary (okay, it was a zombie movie)."
  },
  {
    "reason": "I'm busy negotiating with some minions; world domination can't wait."
  },
  {
    "reason": "I have to consult Doctor Strange about attending (he foresaw that I don't)."
  },
  {
    "reason": "My boss told me to only say yes to salary raises, so no to everything else."
  },
  {
    "reason": "I've used up all my sick days, so I'm calling in well and staying home."
  },
  {
    "reason": "My teacher said I need to focus on not overcommitting."
  },
  {
    "reason": "I have a work thing... it's called avoiding work."
  },
  {
    "reason": "My calendar at work has a big red 'NOPE' on that date."
  },
  {
    "reason": "I can't, I have an important meeting to stare at a spreadsheet and contemplate life."
  },
  {
    "reason": "I'm taking a personal day to avoid persons."
  },
  {
    "reason": "Got a conference call with myself, and it's very time-consuming."
  },
  {
    "reason": "My overtime got into a fight with my free time, and free time lost."
  },
  {
    "reason": "My PTO (Permission To Opt-out) is in effect."
  },
  {
    "reason": "If I go, it might trigger the apocalypse. Better not risk it."
  },
  {
    "reason": "I have to stay put to prevent the zombie outbreak from starting (long story)."
  },
  {
    "reason": "I'd come, but Nostradamus predicted I'd say no."
  },
  {
    "reason": "It's one of the signs of the apocalypse if I say yes, let's avoid that."
  },
  {
    "reason": "My attendance is the last seal before the apocalypse, so hard pass."
  },
  {
    "reason": "I fear my yes would summon Cthulhu or something."
  },
  {
    "reason": "I'm avoiding causing a butterfly effect that ends the world."
  },
  {
    "reason": "Legend says if I ever agree, the world will end in a spectacular musical number."
  },
  {
    "reason": "I made a deal with a demon to never say yes, and I hate to break a contract."
  },
  {
    "reason": "The doomsday clock ticks faster every time I consider agreeing."
  },
  {
    "reason": "Yes, you may interpret my silence as a no."
  },
  {
    "reason": "I’m nodding yes in spirit, but physically I’m shaking my head no."
  },
  {
    "reason": "Sure...ly you can find someone else?"
  },
  {
    "reason": "Yes is in my vocabulary, just not today."
  },
  {
    "reason": "On a scale of yes to no, I'm at a 'not in a million years'."
  },
  {
    "reason": "I meant to say yes, but all that came out was no."
  },
  {
    "reason": "Consider my 'yes' lost in the mail."
  },
  {
    "reason": "Y-E-S are letters you'll not hear from me today."
  },
  {
    "reason": "Picture me enthusiastically not doing that."
  },
  {
    "reason": "Imagining me helping? Now imagine the opposite. There you go."
  },
  {
    "reason": "I'm feeling unlucky, so I better not risk saying yes."
  },
  {
    "reason": "I rolled the dice and it came up 'no'."
  },
  {
    "reason": "I consulted Lady Luck; she told me to stay home."
  },
  {
    "reason": "My luck ran out just before you asked."
  },
  {
    "reason": "If I had a lucky penny for every time I said no, I'd be rich. Speaking of which, no."
  },
  {
    "reason": "I'd join but I accidentally walked under a ladder and broke a mirror. Not chancing it."
  },
  {
    "reason": "My fortune teller said 'not in your stars', I trust that."
  },
  {
    "reason": "I pulled a card from a deck; it said 'Do Not Pass Go, Do Not Say Yes'."
  },
  {
    "reason": "Fate decided to swipe left on this one."
  },
  {
    "reason": "The stars aligned... to form a big 'NO'."
  },
  {
    "reason": "I can't; the weather forecast said there's a 100% chance of me staying home."
  },
  {
    "reason": "It's raining 'no's and I'm soaking wet in them."
  },
  {
    "reason": "I only go out in perfect weather conditions, which this clearly isn't (for me)."
  },
  {
    "reason": "I'm experiencing a heavy downpour of laziness."
  },
  {
    "reason": "The winds of fate blew and I got hit in the face with a 'no'."
  },
  {
    "reason": "There’s a storm brewing and it's named My Reluctance."
  },
  {
    "reason": "I suspect a sudden tornado of responsibilities will keep me inside."
  },
  {
    "reason": "I'm under the weather, specifically a cloud of nope."
  },
  {
    "reason": "The forecast for that day is me with a high chance of not showing up."
  },
  {
    "reason": "I’d hate to step out and melt; I'm made of sugar and sarcasm."
  },
  {
    "reason": "I could say yes, but that would be a lie."
  },
  {
    "reason": "My heart says yes, but my soul says 'are you kidding?'"
  },
  {
    "reason": "I'm physically capable of doing it, just morally opposed (to effort)."
  },
  {
    "reason": "I have an inner conflict: Part of me says 'no'. The other part also says 'no'."
  },
  {
    "reason": "I’ve reached an age where I just say no to things I hate. And I hate this."
  },
  {
    "reason": "My willpower to do that got stuck in traffic and won't make it."
  },
  {
    "reason": "I gave it some thought. The thought was 'no'."
  },
  {
    "reason": "In theory I could, but let's stick to reality where I won't."
  },
  {
    "reason": "I'm trying to be less of a people-pleaser, starting now."
  },
  {
    "reason": "I just looked in the mirror and practiced saying 'no' and it felt right."
  },
  {
    "reason": "I can't say yes before I've had my coffee. And I never plan to have coffee."
  },
  {
    "reason": "No caffeine, no can-do."
  },
  {
    "reason": "My coffee and I have a pact: no important decisions without it, and it’s not available."
  },
  {
    "reason": "I would say yes, but I haven't met my daily coffee quota to deal with the consequences."
  },
  {
    "reason": "I'm in a decaffeinated state of no."
  },
  {
    "reason": "My brain is only powered by caffeine, and we're experiencing a power outage."
  },
  {
    "reason": "No java, no java-do."
  },
  {
    "reason": "The coffee machine called in sick, so I'm incapable of agreeing to anything."
  },
  {
    "reason": "I promised myself I'd only decide things after coffee; too bad it's already no-o'clock."
  },
  {
    "reason": "My morning coffee and I decided this isn't worth the caffeine it would take."
  },
  {
    "reason": "I'm too busy plotting world domination to attend."
  },
  {
    "reason": "If I said yes, it might ruin my evil plan."
  },
  {
    "reason": "My secret lair needs tending to at that time."
  },
  {
    "reason": "I'm in the middle of a devious scheme and can't break away."
  },
  {
    "reason": "I can't help you; I'm a supervillain in training and this would mess up my cred."
  },
  {
    "reason": "I would join, but then I'd have to recruit you into my plans and you wouldn't like that."
  },
  {
    "reason": "I'm brainstorming how to take over the world, and I need full concentration."
  },
  {
    "reason": "My minions scheduled a revolt for that day, and I need to be present."
  },
  {
    "reason": "I must regretfully decline as I have many diabolical laughs to practice."
  },
  {
    "reason": "Evil never sleeps, and apparently neither do I, except I'm definitely not going out."
  },
  {
    "reason": "I'm trying to align my chakras by not stressing, so I'll say no."
  },
  {
    "reason": "To maintain balance in the Force, I must decline."
  },
  {
    "reason": "My yin and yang are telling me not to do it."
  },
  {
    "reason": "For the sake of cosmic balance, I can't agree."
  },
  {
    "reason": "I'm in the middle of a feng shui adjustment to my life that forbids new commitments."
  },
  {
    "reason": "I must refuse, or the delicate equilibrium of my laziness will be disrupted."
  },
  {
    "reason": "Saying yes would throw off the balance of my weekly yes-to-no ratio."
  },
  {
    "reason": "I need to keep my karma clear, and I sense a yes would muddy it."
  },
  {
    "reason": "I must achieve inner peace, which means not complicating my day with this."
  },
  {
    "reason": "I'm afraid if I enjoy myself, it will become a bad habit."
  },
  {
    "reason": "If I end up liking it, then I'll have to do it again, so no."
  },
  {
    "reason": "I'm scared of success, so I must decline anything that might work out."
  },
  {
    "reason": "I'm afraid I'll set the bar too high if I say yes and do a good job."
  },
  {
    "reason": "Fun? I'm not sure I remember what that is, better not risk it."
  },
  {
    "reason": "I'm allergic to fun—break out in sarcasm."
  },
  {
    "reason": "I avoid anything that might make me smile too much."
  },
  {
    "reason": "I'm trying to remain mysterious and saying yes would make me too accessible."
  },
  {
    "reason": "I like to keep my expectations low by not doing anything."
  },
  {
    "reason": "I'm avoiding fun until further notice."
  },
  {
    "reason": "Asking me to do that is like asking a fish to climb a tree."
  },
  {
    "reason": "Me doing that would be like a chicken trying to do algebra."
  },
  {
    "reason": "Saying yes would be as unusual as a cat becoming a vegan."
  },
  {
    "reason": "That idea and I go together like oil and water."
  },
  {
    "reason": "Me participating is like a square peg in a round hole—just not fitting."
  },
  {
    "reason": "My motivation and that task are like two magnets repelling each other."
  },
  {
    "reason": "It would be like expecting a sloth to win a 100m dash."
  },
  {
    "reason": "As compatible as ice cream and hot soup—best kept separate."
  },
  {
    "reason": "Me saying yes is about as likely as pigs piloting a spaceship."
  },
  {
    "reason": "That request is the peanut butter to my allergy."
  },
  {
    "reason": "I just realized it's a holiday: National Not Gonna Do It Day."
  },
  {
    "reason": "I'm observing a personal holiday called Nope-vember."
  },
  {
    "reason": "I can't; I've got Festivus grievances to air that day."
  },
  {
    "reason": "I'm booked that day celebrating the Festival of No."
  },
  {
    "reason": "I'm already committed to the Anti-Work Holiday."
  },
  {
    "reason": "I celebrate Opposite Day by doing the opposite of what you ask."
  },
  {
    "reason": "Sorry, it's my annual day of rest... like the Sabbath, but for laziness."
  },
  {
    "reason": "I only celebrate events that involve cake, so unless there's cake, no."
  },
  {
    "reason": "That date conflicts with my extended celebration of Chillmas."
  },
  {
    "reason": "It's my pet rock's birthday, which is basically a global holiday to me."
  },
  {
    "reason": "I want to say yes, but my common sense is yelling 'no' repeatedly."
  },
  {
    "reason": "My heart says maybe, but my brain threw a giant red flag."
  },
  {
    "reason": "My gut feeling started doing the Macarena when you asked (that's a no dance)."
  },
  {
    "reason": "Every fiber of my being is currently doing the wave in honor of saying no."
  },
  {
    "reason": "The tiny responsible voice in my head and the loud lazy one both agree: no."
  },
  {
    "reason": "I asked my better judgment, and it laughed hysterically."
  },
  {
    "reason": "My brain highlighted that request and hit the delete key."
  },
  {
    "reason": "My conscience would haunt me if I said yes."
  },
  {
    "reason": "Even the angel on my shoulder is like, 'nah, dude'."
  },
  {
    "reason": "My inner voice is just screaming 'NOOOO' Darth Vader-style."
  },
  {
    "reason": "I'm not procrastinating; I'm proactively saying no in advance."
  },
  {
    "reason": "I'm delaying my decision until the end of time—spoiler: it's no."
  },
  {
    "reason": "Why do today what I can avoid indefinitely?"
  },
  {
    "reason": "My planner just says 'Nope' on every page this week."
  },
  {
    "reason": "I'll put this request on my to-do list right after 'learn teleportation'."
  },
  {
    "reason": "I'm in the process of rescheduling my procrastination for later."
  },
  {
    "reason": "I'm waiting for the last minute, and it hasn't arrived for this."
  },
  {
    "reason": "I thought about doing it later, then realized later is fully booked as well."
  },
  {
    "reason": "I'm on a procrastination roll, can't stop now."
  },
  {
    "reason": "I'm deferring my yes until a year that doesn't exist."
  },
  {
    "reason": "I would help, but then you'd have two of us needing help."
  },
  {
    "reason": "I'm not sure you can afford the damage I'd do by trying."
  },
  {
    "reason": "My help comes with a money-back guarantee, but you don't want it."
  },
  {
    "reason": "I'm the last person who should do that—literally, I'm last in line."
  },
  {
    "reason": "I tried doing something similar once; let's just say the fire department got involved."
  },
  {
    "reason": "If I do it, you'll spend more time fixing my mistakes."
  },
  {
    "reason": "My competence is on vacation right now."
  },
  {
    "reason": "I excel at procrastinating, not at actually doing things."
  },
  {
    "reason": "I'd volunteer, but the incompetence fee I charge is quite high."
  },
  {
    "reason": "I would assist, but then I'd have to legally disclaim any results."
  },
  {
    "reason": "It doesn't really spark joy in me, so I'll pass."
  },
  {
    "reason": "That idea doesn't pass the vibe check for me."
  },
  {
    "reason": "I'm not feeling a strong gravitational pull towards doing that."
  },
  {
    "reason": "My interest level is somewhere between zero and negative."
  },
  {
    "reason": "If I had any less interest, I'd be in a coma."
  },
  {
    "reason": "My curiosity just left the room when I heard that idea."
  },
  {
    "reason": "I'm sure it's fascinating, but my attention span thinks otherwise."
  },
  {
    "reason": "I'm saving my enthusiasm for something duller."
  },
  {
    "reason": "I fell asleep halfway through considering it."
  },
  {
    "reason": "I tried to get excited about it and pulled a muscle."
  },
  {
    "reason": "The government has me in a witness protection program against events like this."
  },
  {
    "reason": "My parole officer said I'm only allowed to work on being lazy."
  },
  {
    "reason": "The FBI called; they said me saying yes would be a national security risk."
  },
  {
    "reason": "I would come, but the judge of my life sentenced me to staying home."
  },
  {
    "reason": "My license to have fun was revoked."
  },
  {
    "reason": "I'd love to comply, but I'm under strict orders from myself not to."
  },
  {
    "reason": "The Queen of England ghost-told me to stay home (I only take royal commands)."
  },
  {
    "reason": "The island I'm exiled on doesn't allow me to leave for events."
  },
  {
    "reason": "I'm contractually obligated to decline under the terms of my life choices."
  },
  {
    "reason": "The police told me I'm too interesting to attend normal gatherings."
  },
  {
    "reason": "I'm too old for this kind of commitment to things."
  },
  {
    "reason": "I think I'm at an age where I just say no to stuff like this."
  },
  {
    "reason": "At my age, my give-a-darn is busted."
  },
  {
    "reason": "I'm having a midlife crisis and saying yes isn't part of it."
  },
  {
    "reason": "I'm in my rebellious phase of only doing what I want, so no."
  },
  {
    "reason": "I'm channeling my inner grumpy old person and staying home."
  },
  {
    "reason": "I'm revisiting my teenage rebellion by saying no to everything."
  },
  {
    "reason": "In my day, we didn't have to do things we didn't want to (and I'm keeping it that way)."
  },
  {
    "reason": "I'm practicing for my future as a crotchety old hermit."
  },
  {
    "reason": "I'm aging like fine wine, which means getting more stubborn about saying no."
  },
  {
    "reason": "My fairy godmother said I should stay home or I'll turn into a pumpkin."
  },
  {
    "reason": "Cinderella left one shoe here and I need to help find the other instead of going out."
  },
  {
    "reason": "I'm awaiting Prince Charming with pizza, so I can't go anywhere."
  },
  {
    "reason": "I can't come; the Big Bad Wolf is at my door (selling insurance, apparently)."
  },
  {
    "reason": "I have to keep an eye on my gingerbread house, you know how it is."
  },
  {
    "reason": "The seven dwarves warned me about overextending myself."
  },
  {
    "reason": "I'm under a sleeping spell that only time (and not doing that) can break."
  },
  {
    "reason": "I lost my glass slipper and can't go out without proper footwear."
  },
  {
    "reason": "The frog I was supposed to kiss to become a prince gave me a rain check."
  },
  {
    "reason": "I'm stuck in a fairy tale, and agreeing to that isn't part of the plot."
  },
  {
    "reason": "I have to guard the refrigerator tonight; snacks are counting on me."
  },
  {
    "reason": "I've dedicated that time to an ice cream in need of company."
  },
  {
    "reason": "I'm carb loading for a marathon of not doing that."
  },
  {
    "reason": "I have a dinner date with a pizza and it would be jealous if I cancel."
  },
  {
    "reason": "I can't go out; my fridge just opened a bottle of wine and it'd be rude not to join."
  },
  {
    "reason": "I'm testing a theory that I can survive on chips alone, can't interrupt that."
  },
  {
    "reason": "My oven and I have plans to bake and eat an entire cake."
  },
  {
    "reason": "I promised to help my popcorn pop—it's a very involved process."
  },
  {
    "reason": "I would, but I just started cooking a five-course meal for one (me)."
  },
  {
    "reason": "I'm learning to cook invisible meals; it's very time-consuming."
  },
  {
    "reason": "I have to be on standby in case Netflix needs me to watch something."
  },
  {
    "reason": "I'm on call as the family couch potato."
  },
  {
    "reason": "I'm the designated stay-at-home person this week."
  },
  {
    "reason": "I'm serving jury duty in the court of my own laziness."
  },
  {
    "reason": "I'm on a secret standby mission – can't disclose, just know I can't come."
  },
  {
    "reason": "I'm the emergency contact for my TV, so I must remain available."
  },
  {
    "reason": "I'm committed to staying home in case of a snack emergency."
  },
  {
    "reason": "I signed up to be a test subject for sleeping in, and I have a session then."
  },
  {
    "reason": "I'm part of a top-secret project called Project No."
  },
  {
    "reason": "I have a duty to uphold: keep my couch from feeling lonely."
  },
  {
    "reason": "My car decided to take a personal day off."
  },
  {
    "reason": "The public transportation in my living room is currently not operational."
  },
  {
    "reason": "I tried to leave, but my door wouldn't let me (we negotiated, and I stayed)."
  },
  {
    "reason": "My GPS recommended I stay home to avoid bad decisions."
  },
  {
    "reason": "My carpool pony is sick. Yes, it's a pony, don't ask."
  },
  {
    "reason": "I would bike there, but my bike just laughed at me."
  },
  {
    "reason": "Uber doesn't deliver me to bad ideas."
  },
  {
    "reason": "I missed the train of thought that would make me go."
  },
  {
    "reason": "My broomstick is in the shop (you know how unreliable those are)."
  },
  {
    "reason": "All roads lead to me staying home."
  },
  {
    "reason": "My insurance doesn't cover acts of me doing that."
  },
  {
    "reason": "I need to stay in a safe environment, and that event sounds risky (to my sanity)."
  },
  {
    "reason": "Occupational Health and Safety flagged that activity as a hazard for me."
  },
  {
    "reason": "I'm waiting for my bubble wrap suit to arrive before I attempt such things."
  },
  {
    "reason": "That sounds dangerous for my well-being (mostly my mental well-being)."
  },
  {
    "reason": "I only operate heavy machinery (like my couch) under supervision, so I can't go."
  },
  {
    "reason": "The last time I tried, I got a papercut on my soul."
  },
  {
    "reason": "For safety reasons, I'm required to stay away from that kind of excitement."
  },
  {
    "reason": "My guardian angel submitted a restraining order against that plan."
  },
  {
    "reason": "I'd prefer not to injure my will to live by saying yes."
  },
  {
    "reason": "I've transcended the need for activities like that."
  },
  {
    "reason": "I'm focusing on the journey of doing nothing, not the destination of that task."
  },
  {
    "reason": "My existential crisis and I decided against it."
  },
  {
    "reason": "In the grand tapestry of life, I'm the thread that sits this one out."
  },
  {
    "reason": "I've realized the meaning of life isn't doing that, so I'm good."
  },
  {
    "reason": "I'd rather search for the purpose of life than attend."
  },
  {
    "reason": "I think, therefore I am... not going to do that."
  },
  {
    "reason": "My current philosophy: if it requires pants, it's a no."
  },
  {
    "reason": "I'm practicing wu wei (doing nothing) as per Taoism, so I must decline."
  },
  {
    "reason": "To do or not to do? That is the question, and I've answered 'not to do.'"
  },
  {
    "reason": "I trained for years under a master of saying no."
  },
  {
    "reason": "I got a black belt in No-jitsu."
  },
  {
    "reason": "I've been preparing my whole life to say no to this exact request."
  },
  {
    "reason": "I took a seminar on assertiveness and I'm itching to use what I learned: No."
  },
  {
    "reason": "My reflexes are honed to automatically decline invites."
  },
  {
    "reason": "I signed up for a 'Just Say No' workshop and I need to practice."
  },
  {
    "reason": "I'm part of a secret society where we only communicate via refusals."
  },
  {
    "reason": "My knee-jerk reaction is no, and my knee is feeling particularly jerky."
  },
  {
    "reason": "Saying no is my cardio."
  },
  {
    "reason": "I've been rehearsing my 'no' all week for just such an occasion."
  },
  {
    "reason": "No is my middle name. Well, not legally, but spiritually."
  },
  {
    "reason": "I come from a long line of expert decliners."
  },
  {
    "reason": "My DNA test came back: I'm 100% not doing that."
  },
  {
    "reason": "I'm genetically predisposed to say no."
  },
  {
    "reason": "I was born to say no—first word I ever said and never stopped."
  },
  {
    "reason": "I have a rare genetic disorder where I break out in refusals."
  },
  {
    "reason": "My spirit animal is a sloth, and it's telling me to stay put."
  },
  {
    "reason": "Astrologically, I'm a No-rgo or a Libra-thinks-not (one of those)."
  },
  {
    "reason": "I took an oath as a kid to avoid anything resembling this."
  },
  {
    "reason": "My life coach advised me to eliminate stressors, starting with this."
  },
  {
    "reason": "My friends would have a heart attack if I suddenly said yes to things."
  },
  {
    "reason": "It would set a bad precedent if I started agreeing to reasonable requests."
  },
  {
    "reason": "If I start saying yes now, where will it end? World domination? Better not."
  },
  {
    "reason": "Saying yes once might give me a reputation for being helpful—can't have that."
  },
  {
    "reason": "I can't shock my system with responsibility like that; doctor’s orders."
  },
  {
    "reason": "Yes is such a small word for such a life-changing event, I'm not ready."
  },
  {
    "reason": "I'm afraid saying yes now will open floodgates of expectations."
  },
  {
    "reason": "If I said yes, people might expect me to do it again. Perish the thought."
  },
  {
    "reason": "Agreeing to this would confuse everyone who knows me as a professional avoider."
  },
  {
    "reason": "My brand is 'reliable disappointment', and I have to stay consistent."
  },
  {
    "reason": "Can I take a rain check and then lose it forever?"
  },
  {
    "reason": "Let's pencil it in for the 12th of Never."
  },
  {
    "reason": "I'll join you on the 32nd of this month."
  },
  {
    "reason": "How about I catch the next one... in a parallel universe?"
  },
  {
    "reason": "Maybe another time, like when pigs fly or hell freezes over, whichever comes first."
  },
  {
    "reason": "I'll attend in spirit. Specifically, the spirit of 'not there'."
  },
  {
    "reason": "Let's say I was there in our imaginations and call it a day."
  },
  {
    "reason": "I'm there in thought, just not in body or actual presence."
  },
  {
    "reason": "I'll let you know when I'm free. (Don't wait up.)"
  },
  {
    "reason": "I'm on a mission in a video game and real life can't compete."
  },
  {
    "reason": "I would, but I'm one XP away from leveling up in doing nothing."
  },
  {
    "reason": "My guild in World of Warcraft needs me to farm 'No' potions."
  },
  {
    "reason": "I'm in the middle of a high-stakes Tetris game (yes, it's very serious)."
  },
  {
    "reason": "I promised my online friends I'd keep the server alive by staying on."
  },
  {
    "reason": "I'm practicing my gaming skills; real life quests have to wait."
  },
  {
    "reason": "I have to defend my virtual village from pixelated invaders at that time."
  },
  {
    "reason": "My controller died, and so did my desire to go out."
  },
  {
    "reason": "I'm roleplaying as a recluse currently."
  },
  {
    "reason": "I'm busy achieving a new high score in introversion."
  },
  {
    "reason": "I have nothing to wear that would match the look of regret I'd have if I went."
  },
  {
    "reason": "All my clothes are allergic to outside activities."
  },
  {
    "reason": "My wardrobe and I have an agreement: it only sees the couch."
  },
  {
    "reason": "I would go, but I've already changed into my pajamas."
  },
  {
    "reason": "I can't find my motivation to get dressed up; I think I donated it."
  },
  {
    "reason": "The dress code for that sounds like 'effort', so I'm out."
  },
  {
    "reason": "I only attend events that allow pajamas as formal attire."
  },
  {
    "reason": "My fashion sense just texted: it said not to bother."
  },
  {
    "reason": "I'm stuck in my closet's Narnia and can't get out to attend."
  },
  {
    "reason": "Sorry, nothing in my closet screams 'let’s do this.' It all screams 'stay home'."
  },
  {
    "reason": "My dog ate my homework, and then demanded a sequel."
  },
  {
    "reason": "I was late because time decided to move faster than me today."
  },
  {
    "reason": "I missed work because my bedroom was conducting a hostage situation with me as the hostage."
  },
  {
    "reason": "I didn't show up because I prefer to be fashionably absent."
  },
  {
    "reason": "My alarm clock and I had a fight, and it won by not ringing."
  },
  {
    "reason": "I skipped class because I felt I owed it to myself to not learn bad things."
  },
  {
    "reason": "I couldn't join because I was busy not panicking about it."
  },
  {
    "reason": "I didn't attend the meeting because I was abducted by a daydream."
  },
  {
    "reason": "I bailed last minute because commitment issues run in my family."
  },
  {
    "reason": "I arrived on time in spirit, but my body took a detour."
  },
  {
    "reason": "Does a fish need a bicycle? That's how much I need to do this."
  },
  {
    "reason": "Do pigs fly? Only then would I do that."
  },
  {
    "reason": "Is the sky green? No? There's my answer."
  },
  {
    "reason": "Would it be wise for me to agree? That's a no from the Council of Me."
  },
  {
    "reason": "Is this the part where I say yes? No? Good, because I won't."
  },
  {
    "reason": "Do I look like someone who would do that? Correct, I don't."
  },
  {
    "reason": "Is it Opposite Day? Because otherwise my answer is no."
  },
  {
    "reason": "Did I just hear myself volunteer? No, so I'll keep it that way."
  },
  {
    "reason": "Is this a trick question? Because I'm answering like it's one: no."
  },
  {
    "reason": "Am I coming? I'll answer that when water isn't wet."
  },
  {
    "reason": "I'm going to deliver my answer in interpretive dance. *performs a NO*"
  },
  {
    "reason": "If I could sing, I'd sing 'I say noooo' in opera for you."
  },
  {
    "reason": "Imagine me dramatically yelling 'I decline!' with a cape flourish."
  },
  {
    "reason": "I'll write a haiku for my answer: 'No absolutely / Indubitably no / Still no, sorry'."
  },
  {
    "reason": "Picture a skywriter writing 'NO' above your house—that's my answer."
  },
  {
    "reason": "Insert an orchestra sound: dun dun dun NO."
  },
  {
    "reason": "I'm throwing confetti and the confetti spells 'NO'."
  },
  {
    "reason": "I'm holding up a scorecard that says 0, as in 0% chance."
  },
  {
    "reason": "Improv theater time: I play a person who says no. End scene."
  },
  {
    "reason": "*Cue dramatic exit with a refusal monologue*."
  },
  {
    "reason": "I would, but I'm Batman. (That excuse works for anything, right?)"
  },
  {
    "reason": "I was abducted by aliens yesterday and they gave me strict instructions to avoid that."
  },
  {
    "reason": "Aliens invited me to a galaxy party, and I already RSVP'd yes to them."
  },
  {
    "reason": "I'm communicating with extraterrestrials at that time, Earth events must wait."
  },
  {
    "reason": "I'm on a mission to Mars in my dreams, scheduling conflict with reality."
  },
  {
    "reason": "I can't come; I'm the aliens' tour guide for Earth and they're very demanding."
  },
  {
    "reason": "The mothership is coming to pick me up any minute now."
  },
  {
    "reason": "I'm learning an alien language; they don't have a word for yes and neither do I right now."
  },
  {
    "reason": "The aliens took my enthusiasm with them when they left."
  },
  {
    "reason": "I suspect I'm an alien, and we historically avoid those situations."
  },
  {
    "reason": "My planet needs me, so I must go (meaning I must stay at home)."
  },
  {
    "reason": "I'm running for President of the Procrastination Club; my campaign is very time-consuming."
  },
  {
    "reason": "My will to participate mysteriously vanished just as you asked."
  },
  {
    "reason": "I played the lottery of caring and lost."
  },
  {
    "reason": "I have an irrational fear of accidentally enjoying obligations, so I avoid them."
  },
  {
    "reason": "As the meme goes, ain't nobody got time for that."
  },
  {
    "reason": "I'm too deep into my comfort zone to even see the exit."
  },
  {
    "reason": "I've reached my nope limit for the day."
  },
  {
    "reason": "My calendar just sent me a restraining order against new events."
  },
  {
    "reason": "I'm in a long-term relationship with canceling plans."
  },
  {
    "reason": "I'm experiencing JOMO (Joy Of Missing Out) for this event."
  },
  {
    "reason": "Channeling Opposite Nike: 'Just don't do it.'"
  },
  {
    "reason": "I'd rather regret not doing it than regret doing it."
  },
  {
    "reason": "Applying my version of Murphy's Law: if it can be avoided, it will be."
  },
  {
    "reason": "My answer is like Schrödinger's cat: it's both yes and no until you realize it's just no."
  },
  {
    "reason": "YOLO, which is why I'm saying no – I value my one life too much."
  },
  {
    "reason": "My horoscope app just notified me: 'Today is a good day to say no.'"
  },
  {
    "reason": "If saying no were an Olympic sport, I'd have a gold medal."
  },
  {
    "reason": "I wear my refusal as a badge of honor."
  },
  {
    "reason": "I'm going to have to decline faster than a cheetah on energy drinks."
  },
  {
    "reason": "I would say yes, but then I'd have to wake up from my daydream, and reality is far less pleasant."
  },
  {
    "reason": "Emergency! I just ran out of chocolate, and that's all I can handle right now."
  },
  {
    "reason": "Fate just slid into my DMs with a big fat 'no'."
  },
  {
    "reason": "My brain is at full capacity with useless information, there's no room for new tasks."
  },
  {
    "reason": "If I help you, I'd feel proud of myself, and I can't handle that much emotion."
  },
  {
    "reason": "I'll give you two choices: no, or nope. You can pick."
  },
  {
    "reason": "Let's make it multiple choice. I choose option (D) - Not gonna happen."
  },
  {
    "reason": "Look on the bright side: at least I'm consistent in saying no."
  },
  {
    "reason": "Consider this a 'no' served with a side of sarcasm."
  },
  {
    "reason": "I'm stuck in a black hole of procrastination and can't escape in time to do that."
  },
  {
    "reason": "I only say yes during solar eclipses, and there's none scheduled."
  },
  {
    "reason": "My retro soul can't handle modern tasks like that."
  },
  {
    "reason": "The word 'yes' gives me hives; I'm avoiding an allergic reaction."
  },
  {
    "reason": "I had a dream I said yes; I woke up in a cold sweat. Not doing that in reality."
  },
  {
    "reason": "In the time it took you to ask, I already decided no."
  },
  {
    "reason": "I'm sorry, I can't hear you over the sound of me not doing that."
  },
  {
    "reason": "I think our connection is bad. If you asked me to do something, the answer is static... which means no."
  },
  {
    "reason": "I misheard you, I thought you said 'do you want a taco'. Since you didn't, I'm not interested."
  },
  {
    "reason": "My phone auto-corrected your request to 'no', weird right?"
  },
  {
    "reason": "I got your message, but unfortunately, my spam filter caught it under 'unwanted tasks'."
  },
  {
    "reason": "I believe you have the wrong number; the person who says yes isn't available."
  },
  {
    "reason": "I speak fluent sarcasm, so my interpretation of your question is a hard no."
  },
  {
    "reason": "Let me put you on hold... *never takes off hold*"
  },
  {
    "reason": "I didn’t receive the memo that I was supposed to care."
  },
  {
    "reason": "I'm experiencing some technical difficulties in giving a darn."
  },
  {
    "reason": "The gods of procrastination demand I sacrifice this task by not doing it."
  },
  {
    "reason": "No is a complete sentence, and it's my final answer."
  },
  {
    "reason": "I fear agreeing could somehow trigger a zombie apocalypse, so I'm playing it safe."
  },
  {
    "reason": "My spidey-sense is tingling, and it's telling me not to do this."
  },
  {
    "reason": "The fabric of my being just isn't woven for that request."
  },
  {
    "reason": "They say 'follow your dreams' — and my dream is to not do that."
  },
  {
    "reason": "I'm just following the saying 'do what you love' — and I love saying no."
  },
  {
    "reason": "Not today, Satan. Actually, not any day."
  },
  {
    "reason": "My procrastination is doing a fantastic job; I wouldn't want to interrupt its flow."
  },
  {
    "reason": "No means 'New Opportunities'... for me to stay at home."
  },
  {
    "reason": "I made a bet that I could say no to everything for a week. I'm about to win."
  },
  {
    "reason": "I'm conducting a social experiment where I say no and observe what happens."
  },
  {
    "reason": "One of my pet peeves is doing stuff, so I simply don't."
  },
  {
    "reason": "Life is short, and I choose to waste it my way, not on that."
  },
  {
    "reason": "I've already met my quota of bad decisions for the month; saying yes would exceed it."
  },
  {
    "reason": "I'd love to participate, but I'm dead inside, so I just can't."
  },
  {
    "reason": "I have main character syndrome, and my story arc doesn't involve doing that."
  },
  {
    "reason": "Think of me as the final boss of saying no – undefeated."
  },
  {
    "reason": "Time is a non-renewable resource, and I choose not to spend any on that."
  },
  {
    "reason": "My free trial of doing things has expired, and I can't afford the subscription."
  },
  {
    "reason": "I'm on a strict 'no commitments' diet."
  },
  {
    "reason": "I'm doing intermittent fasting from responsibilities; today's a fasting day."
  },
  {
    "reason": "I only say yes on leap days, and today isn't one."
  },
  {
    "reason": "I can't risk unlocking my final form by being helpful."
  },
  {
    "reason": "I need to maintain my air of mystery by not showing up."
  },
  {
    "reason": "I can't let people find out I actually have free time."
  },
  {
    "reason": "I used all my willpower just getting out of bed this morning."
  },
  {
    "reason": "My life is a choose-your-own-adventure, and I flipped to the page where I say no."
  },
  {
    "reason": "By the power vested in me, I'm officially saying no."
  },
  {
    "reason": "Me, myself, and I had a meeting; we unanimously decided to decline."
  },
  {
    "reason": "I see your request and raise you a 'no'."
  },
  {
    "reason": "My enthusiasm is on backorder, and the delivery date keeps getting pushed."
  },
  {
    "reason": "I'm still recovering from the last time I said yes."
  },
  {
    "reason": "I used to do things like that, then I took an arrow to the knee."
  },
  {
    "reason": "It's not procrastination if I never planned on doing it."
  },
  {
    "reason": "I didn't choose the no life; the no life chose me."
  },
  {
    "reason": "Effort is currently not supported by my operating system."
  },
  {
    "reason": "My personal assistant (who's imaginary) already declined for me."
  },
  {
    "reason": "I prefer to remain an out-of-office message in human form."
  },
  {
    "reason": "I got lost on the way to 'yes' and ended up at 'no'."
  },
  {
    "reason": "If I say yes, then I'd actually have to do it—let's avoid that."
  },
  {
    "reason": "In the hero's journey of my life, I'm at the 'refusal of the call' stage."
  },
  {
    "reason": "I'm on a sabbatical from anything that sounds like work."
  },
  {
    "reason": "I made a New Year's resolution to say no more often. Starting now."
  },
  {
    "reason": "I performed a risk assessment and the results said 'no'."
  },
  {
    "reason": "I have a reputation to uphold—specifically, for saying no."
  },
  {
    "reason": "My intuition tells me this isn't the day I start being helpful."
  },
  {
    "reason": "The thought of doing that gave me a phantom backache. I'll pass."
  },
  {
    "reason": "If I had a nickel for every time I said no, I'd have a lot of nickels."
  },
  {
    "reason": "I'm attending a meeting of the Anti-Social Social Club (I'm the only member)."
  },
  {
    "reason": "My brain's hard drive is full; there's no room for that task."
  },
  {
    "reason": "I would come, but I'm trying this new thing where I just don't."
  },
  {
    "reason": "I regret to inform you that I'll be vigorously not doing that."
  },
  {
    "reason": "I'm living vicariously through others who say yes, so I don't have to."
  },
  {
    "reason": "Mirror, mirror on the wall, should I do it? It said, 'Not at all.'"
  },
  {
    "reason": "I can't say yes; it would jeopardize my standing in the Procrastinators Hall of Fame."
  },
  {
    "reason": "The probability of me doing that is approaching absolute zero."
  },
  {
    "reason": "My commitment to doing nothing would get jealous if I did something else."
  },
  {
    "reason": "My core competency is avoiding things, and I really need to focus on it."
  },
  {
    "reason": "I lack the necessary enthusiasm to even pretend to consider that."
  },
  {
    "reason": "I'm more of an 'observe from afar' person than a 'participate' person."
  },
  {
    "reason": "My brain is like a parrot that only knows one word: 'no'."
  },
  {
    "reason": "I'm writing a book called '101 Ways to Say No' – thanks for the material."
  },
  {
    "reason": "I'm a terrible liar, so I won't pretend I want to do that."
  },
  {
    "reason": "'No.' I'm giving that answer five stars."
  },
  {
    "reason": "'No' — from me, with love."
  },
  {
    "reason": "May the 'no' be with you."
  },
  {
    "reason": "Saying no is my superpower, and I'm using it to save my free time."
  },
  {
    "reason": "I felt burnout just hearing about it, so I'm preemptively declining."
  },
  {
    "reason": "I'm following the principle of least effort, which means I have to decline."
  },
  {
    "reason": "My life is like a sitcom about avoiding responsibility, and I can't break character."
  },
  {
    "reason": "I checked my availability and the results came back negative."
  },
  {
    "reason": "I'm going to pretend I didn't hear that request and carry on not doing it."
  },
  {
    "reason": "No can do—said in the nicest possible way."
  },
  {
    "reason": "I'm taking a mental health year (starting now), so I have to decline."
  },
  {
    "reason": "I decline to answer on the grounds that it may lead to doing actual work."
  },
  {
    "reason": "Let's be honest: we both know I'm not going to do it."
  },
  {
    "reason": "I'm going to have to nope out for personal reasons (personal reason: I just don't want to)."
  },
  {
    "reason": "Not to brag, but I'm really good at not doing things."
  },
  {
    "reason": "Picture a Venn diagram of my schedule and your request—they don't overlap."
  },
  {
    "reason": "I have too many tabs open in my brain, and none of them is about that."
  },
  {
    "reason": "I'm booked solid with introspection (which is code for doing nothing)."
  },
  {
    "reason": "I have a to-don't list, and this is right at the top."
  },
  {
    "reason": "I'm overbooked with underachieving."
  },
  {
    "reason": "This request is above my emotional pay grade."
  },
  {
    "reason": "My enthusiasm filed for bankruptcy, so I can't invest in that."
  },
  {
    "reason": "My calendar is full of blank spaces reserved for me-time."
  },
  {
    "reason": "I'm not ignoring you—I'm giving you a firm no."
  },
  {
    "reason": "If I take on one more thing, I'll officially become a cautionary tale."
  },
  {
    "reason": "Think of my refusal as a free lesson in handling rejection."
  },
  {
    "reason": "I admire your persistence in asking, but it's still a no."
  },
  {
    "reason": "I'm already living in the fast lane of doing nothing, so I can't slow down for that."
  },
  {
    "reason": "I can't make it; I'm extremely busy not being busy."
  },
  {
    "reason": "If I help you, I'll feel obligated to help others, and that's a slippery slope I'm avoiding."
  },
  {
    "reason": "The universe told me to 'treat myself', which I'm taking as a sign to stay home."
  },
  {
    "reason": "No one has ever accused me of being too helpful, and I don't plan to start now."
  },
  {
    "reason": "I have a fear of change, so I'm sticking with saying no."
  },
  {
    "reason": "My life is like a Jenga tower; one more thing might make it collapse."
  },
  {
    "reason": "I don't have the bandwidth (or any other width) for that."
  },
  {
    "reason": "Life is short, and my nap list is long."
  },
  {
    "reason": "Frankly, my dear, I don't give a darn (about doing it)."
  },
  {
    "reason": "I tried seeing it from your perspective, but I still have to say no."
  },
  {
    "reason": "The timing isn't right—mainly because I just don't want to do it."
  },
  {
    "reason": "I'm in social stealth mode, so I must decline any invitations."
  },
  {
    "reason": "I have a chronic condition called 'idontwanna'."
  },
  {
    "reason": "I'm choosing couch enlightenment over worldly endeavors like that."
  },
  {
    "reason": "I'm off-duty indefinitely."
  },
  {
    "reason": "I'm in the middle of a very delicate 'doing nothing' ritual."
  },
  {
    "reason": "How about I promise to think about it? (I won't, but it sounds polite.)"
  },
  {
    "reason": "I have a prior engagement: a staring contest with my wall."
  },
  {
    "reason": "I'll be busy exploring the great indoors."
  },
  {
    "reason": "The couch has accepted me as one of its own, and I can't betray its trust."
  },
  {
    "reason": "'No' is the new 'yes'—I'm just staying on trend."
  },
  {
    "reason": "I'm the hero my couch deserves, so I must stay with it."
  },
  {
    "reason": "The odds of me doing that are about the same as winning the lottery without buying a ticket."
  },
  {
    "reason": "That isn't on my bucket list; in fact, it's on my chuck-it list."
  },
  {
    "reason": "Please excuse me, my brain is currently out of order."
  },
  {
    "reason": "If there were an award for avoiding participation, I'd be the frontrunner."
  },
  {
    "reason": "I'm declining out of an abundance of apathy."
  },
  {
    "reason": "My destiny lies elsewhere—specifically, on my couch."
  },
  {
    "reason": "One does not simply get me to say yes."
  },
  {
    "reason": "It's a no from me, dawg."
  },
  {
    "reason": "If I say yes, I'd have to stop complaining about being busy, and I can't have that."
  },
  {
    "reason": "My energy is solar-powered, and it's nighttime."
  },
  {
    "reason": "I'll take one for the team by not joining this effort."
  },
  {
    "reason": "I put the 'pro' in procrastinate, and I won't ruin my streak."
  },
  {
    "reason": "Even my shadow decided to stay home, so I will too."
  },
  {
    "reason": "Luckily, I have procrastination insurance. It covers me for situations like this."
  },
  {
    "reason": "I'm not my circus, and those are not my monkeys—so it's not my act to perform."
  },
  {
    "reason": "I don't have enough mana for that quest."
  },
  {
    "reason": "The spirit is willing, but the flesh has already ordered takeout and settled in."
  },
  {
    "reason": "My will to do that is in the shop for repairs."
  },
  {
    "reason": "I could list 1000 reasons why I'm saying no, but I'll spare you."
  },
  {
    "reason": "I decline now, to avoid declining later."
  },
  {
    "reason": "I'm choosing myself over this commitment—so, no."
  },
  {
    "reason": "I'll spare you a half-hearted yes and give you an honest no."
  },
  {
    "reason": "If my life were a movie, this is the part I say no and roll credits."
  },
  {
    "reason": "I'm closing the door on that idea (literally and figuratively)."
  },
  {
    "reason": "My intuition screamed 'no' so loudly, I had to answer accordingly."
  },
  {
    "reason": "'No' is my happy place."
  },
  {
    "reason": "The answer you seek is not available at this time (try again never)."
  },
  {
    "reason": "To quote a famous response: 'No.'"
  },
  {
    "reason": "I'm exercising my right to say no."
  },
  {
    "reason": "Think of this as a strategic veto."
  },
  {
    "reason": "I've never been so sure of anything as I am of saying no."
  },
  {
    "reason": "I woke up today and decided it's a 'no' day."
  },
  {
    "reason": "Today, I only speak in negatives."
  },
  {
    "reason": "I'm on a mission to maintain zero commitments."
  },
  {
    "reason": "Even my FitBit is telling me to stay put."
  },
  {
    "reason": "I'm choosing Netflix over stress, sorry."
  },
  {
    "reason": "No, in the most heartfelt, humorous way possible."
  },
  {
    "reason": "My calendar is on strike."
  },
  {
    "reason": "I choose me, so I'm saying no to you."
  },
  {
    "reason": "I'm doing everyone a favor by sticking to what I'm good at: saying no."
  },
  {
    "reason": "No is part of my self-care routine."
  },
  {
    "reason": "This is a guilt-free no."
  },
  {
    "reason": "If I helped, I'd be robbing you of the chance to do it yourself."
  },
  {
    "reason": "My schedule is in airplane mode."
  },
  {
    "reason": "I'm not ghosting you; I'm giving you a firm no."
  },
  {
    "reason": "I'm at peace with saying no."
  },
  {
    "reason": "Negative. Full stop."
  },
  {
    "reason": "I must protect my sanity at all costs—so no."
  },
  {
    "reason": "I didn't come this far to only come this far. In fact, I'm not coming at all."
  },
  {
    "reason": "It's a 'no' from the committee of me, myself, and I."
  },
  {
    "reason": "I must decline; I've reached my threshold for giving a darn."
  },
  {
    "reason": "Even if I wanted to, I couldn't. And I don't want to."
  },
  {
    "reason": "I'm going to seize the opportunity to do nothing instead."
  },
  {
    "reason": "My will to participate has left the building."
  },
  {
    "reason": "Your request has been denied due to a lack of interest on my part."
  },
  {
    "reason": "Let's just assume I said no and move on."
  },
  {
    "reason": "I'm currently out of order. Please try again never."
  },
  {
    "reason": "Alas, I must decline."
  },
  {
    "reason": "Declining this request sparks joy in me."
  },
  {
    "reason": "I could maybe be convinced, but I'd likely still say no in the end."
  },
  {
    "reason": "I have a philosophical objection to doing that."
  },
  {
    "reason": "If I were any more indifferent, I'd be a statue."
  },
  {
    "reason": "I need to prioritize my priorities, which currently are sleeping and snacking."
  },
  {
    "reason": "My schedule has a built-in 'nope' feature."
  },
  {
    "reason": "Saying yes would break the laws of physics in my personal universe."
  },
  {
    "reason": "At this point, saying yes would just feel wrong."
  },
  {
    "reason": "I promised myself I'd stick to being unhelpful this week."
  },
  {
    "reason": "My laziness is in full bloom, and I cannot uproot it for this."
  },
  {
    "reason": "I'm allergic to obligations and break out in excuses."
  },
  {
    "reason": "I'll sit this one out and let karma reward my honesty."
  },
  {
    "reason": "No can do—said in the nicest way possible (still no)."
  },
  {
    "reason": "Think of my 'no' as an act of self-care."
  },
  {
    "reason": "I'm exercising my freedom of choice, and I choose no."
  },
  {
    "reason": "I'm hard at work doing nothing at all."
  },
  {
    "reason": "I would help, but that would contradict my life's mission statement."
  },
  {
    "reason": "No, but I appreciate your optimism."
  },
  {
    "reason": "I have a black belt in avoidance, and I'd hate to waste it (so, no)."
  },
  {
    "reason": "I'm in the No Witness Protection Program (I say no and then hide)."
  },
  {
    "reason": "I have to stay home and make sure gravity continues to work. (Someone has to.)"
  },
  {
    "reason": "If I go, who will hold down the fort? (The fort being my couch)."
  },
  {
    "reason": "I'm in the middle of a life audit, and unnecessary commitments didn't make the cut."
  },
  {
    "reason": "Declining this is actually part of my five-year plan."
  },
  {
    "reason": "Picture a Venn diagram of my schedule and your request—they don't overlap."
  },
  {
    "reason": "I have too many tabs open in my brain, and none of them is about that task."
  },
  {
    "reason": "I'm booked solid with introspection (which is code for doing nothing)."
  },
  {
    "reason": "I have a to-don't list, and this is right at the top."
  },
  {
    "reason": "I'm overbooked with underachieving."
  },
  {
    "reason": "This request is above my emotional pay grade."
  },
  {
    "reason": "My enthusiasm filed for bankruptcy, so I can't invest in that."
  },
  {
    "reason": "My calendar is full of blank spaces reserved for me-time."
  },
  {
    "reason": "I'm not ignoring you—I'm giving you a very clear 'no'."
  },
  {
    "reason": "If I take on one more thing, I'll officially become a cautionary tale."
  },
  {
    "reason": "Think of my refusal as a free lesson in handling rejection."
  },
  {
    "reason": "I admire your persistence in asking, but it's still a no."
  },
  {
    "reason": "I'm already living in the fast lane of doing nothing, so I can't slow down for that."
  },
  {
    "reason": "I can't make it; I'm extremely busy not being busy."
  },
  {
    "reason": "If I help you, I'll feel obligated to help others, and that's a slippery slope I'm avoiding."
  },
  {
    "reason": "The universe told me to 'treat myself', which I'm taking as a sign to stay home."
  },
  {
    "reason": "No one has ever accused me of being too helpful, and I don't plan to start now."
  },
  {
    "reason": "I have a fear of change, so I'm sticking with saying no."
  },
  {
    "reason": "My life is like a Jenga tower; one more thing might make it collapse."
  },
  {
    "reason": "I don't have the bandwidth (or any other width) for that."
  },
  {
    "reason": "Life is short, and my nap list is long."
  },
  {
    "reason": "Frankly, my dear, I don't give a darn (about doing it)."
  },
  {
    "reason": "I tried seeing it from your perspective, but I still have to say no."
  },
  {
    "reason": "The timing isn't right—mainly because I just don't want to do it."
  },
  {
    "reason": "I'm in social stealth mode, so I must decline any invitations."
  },
  {
    "reason": "I have a chronic condition called 'idontwanna'."
  },
  {
    "reason": "I'm off-duty indefinitely."
  },
  {
    "reason": "I'm in the middle of a very delicate 'doing nothing' ritual."
  },
  {
    "reason": "How about I promise to think about it? (I won't, but it sounds polite.)"
  },
  {
    "reason": "I have a prior engagement: a staring contest with my wall."
  },
  {
    "reason": "I'll be busy exploring the great indoors."
  },
  {
    "reason": "The couch has accepted me as one of its own, and I can't betray its trust."
  },
  {
    "reason": "'No' is the new 'yes'—I'm just staying on trend."
  },
  {
    "reason": "I'm the hero my couch deserves, so I must stay with it."
  },
  {
    "reason": "The odds of me doing that are about the same as winning the lottery without buying a ticket."
  },
  {
    "reason": "That isn't on my bucket list; in fact, it's on my chuck-it list."
  },
  {
    "reason": "Please excuse me, my brain is currently out of order."
  },
  {
    "reason": "If there were an award for avoiding participation, I'd be the frontrunner."
  },
  {
    "reason": "I'm declining out of an abundance of apathy."
  },
  {
    "reason": "My destiny lies elsewhere—specifically, on my couch."
  },
  {
    "reason": "One does not simply get me to say yes."
  },
  {
    "reason": "It's a no from me, dawg."
  },
  {
    "reason": "If I say yes, I'd have to stop complaining about being busy, and I can't have that."
  },
  {
    "reason": "My energy is solar-powered, and it's nighttime."
  },
  {
    "reason": "I'll take one for the team by not joining this effort."
  },
  {
    "reason": "I put the 'pro' in procrastinate, and I won't ruin my streak."
  },
  {
    "reason": "Even my shadow decided to stay home, so I will too."
  },
  {
    "reason": "Luckily, I have procrastination insurance. It covers me for situations like this."
  },
  {
    "reason": "Not my circus, not my monkeys—so definitely not my act to perform."
  },
  {
    "reason": "I don't have enough mana for that quest."
  },
  {
    "reason": "The spirit is willing, but the flesh has already ordered takeout and settled in."
  },
  {
    "reason": "My will to do that is in the shop for repairs."
  },
  {
    "reason": "I could list 1000 reasons why I'm saying no, but I'll spare you."
  },
  {
    "reason": "I decline now, to avoid declining later."
  },
  {
    "reason": "I'm choosing myself over this commitment—so, no."
  },
  {
    "reason": "I'll spare you a half-hearted yes and give you an honest no."
  },
  {
    "reason": "If my life were a movie, this is the part I say no and roll credits."
  },
  {
    "reason": "I'm closing the door on that idea (literally and figuratively)."
  },
  {
    "reason": "My intuition screamed 'no' so loudly, I had to answer accordingly."
  },
  {
    "reason": "'No' is my happy place."
  },
  {
    "reason": "The answer you seek is not available at this time (try again never)."
  },
  {
    "reason": "To quote a famous response: 'No.'"
  },
  {
    "reason": "I'm exercising my right to say no."
  },
  {
    "reason": "Think of this as a strategic veto."
  },
  {
    "reason": "I've never been so sure of anything as I am of saying no."
  },
  {
    "reason": "I woke up today and thought, 'let's not.'"
  },
  {
    "reason": "Today, I only speak in negatives."
  },
  {
    "reason": "I'm on a mission to maintain zero commitments."
  },
  {
    "reason": "Even my FitBit is telling me to stay put."
  },
  {
    "reason": "I'm choosing Netflix over stress, sorry."
  },
  {
    "reason": "No, in the most heartfelt, humorous way possible."
  },
  {
    "reason": "My calendar is on strike."
  },
  {
    "reason": "I'm doing everyone a favor by sticking to what I'm good at: saying no."
  },
  {
    "reason": "No is part of my self-care routine."
  },
  {
    "reason": "This is a guilt-free no."
  },
  {
    "reason": "If I helped, I'd be robbing you of the chance to do it yourself."
  },
  {
    "reason": "My schedule is in airplane mode."
  },
  {
    "reason": "I'm not ghosting you; I'm giving you a firm no."
  },
  {
    "reason": "I'm at peace with saying no."
  },
  {
    "reason": "Negative. Full stop."
  },
  {
    "reason": "I must protect my sanity at all costs—so no."
  },
  {
    "reason": "Alas, I must decline."
  },
  {
    "reason": "Declining this request sparks joy in me."
  },
  {
    "reason": "I'm not ignoring you—I'm giving you a very clear 'no'."
  },
  {
    "reason": "Pretend I gave you a clever excuse and just take the 'no' as implied."
  }
];

export default reasons