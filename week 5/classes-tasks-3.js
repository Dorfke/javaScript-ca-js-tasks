console.groupCollapsed('https://edabit.com/challenge/2FF7RKw9RLwc3EBY9');
{
    class Challenge {
        id;
        level;
        point;

        constructor(id, level) {
            this.id = id;
            this.level = level;
            this.point = {
                VE: 5,
                EA: 10,
                ME: 20,
                HA: 40,
                VH: 80,
                EX: 120
            }
        }

        get points() {
            return this.point[this.level];
        }
    }

    class User {
        name;
        xp;
        log;

        constructor(name, xp, log) {
            this.name = name;
            this.xp = xp;
            this.log = log;
        }

        newSolvedChallenge(challenge) {
            this.xp += challenge.points;
            this.log = [...this.log, challenge.id];
        }
    }

    const user1 = new User("Madam", 0, []);
    const user2 = new User("Steve", 0, []);

    const challenge1 = new Challenge(1,"VE");
    const challenge2 = new Challenge(2,"EA");
    const challenge3 = new Challenge(3,"ME");
    const challenge4 = new Challenge(4,"HA");
    const challenge5 = new Challenge(5,"VH");
    const challenge6 = new Challenge(6,"EX");

    user1.newSolvedChallenge(challenge1);
    user1.newSolvedChallenge(challenge4);
    user1.newSolvedChallenge(challenge6);

    user2.newSolvedChallenge(challenge5);
    user2.newSolvedChallenge(challenge3);
    user2.newSolvedChallenge(challenge2);

    // Test user1
    console.log(user1.name, '<-- Expected result: "Madam"');
    console.log(user1.xp, '<-- Expected result: "165"');
    console.log(user1.log, '<-- Expected result: "[1, 4, 6]"');

    // Test user2
    console.log(user2.name, '<-- Expected result: "Steve"')
    console.log(user2.xp, '<-- Expected result: "110"')
    console.log(user2.log, '<-- Expected result: "[5, 3, 2]"')

    // Test challenges
    console.log(challenge1.id, '<-- Expected result: "1"');
    console.log(challenge2.level, '<-- Expected result: "EA"')
    console.log(challenge3.points, '<-- Expected result: "20"')
    console.log(challenge4.id, '<-- Expected result: "4"')
    console.log(challenge5.level, '<-- Expected result: "VH"')
    console.log(challenge6.points, '<-- Expected result: "120"')

    // Trivial tests
    console.log(user1.xp > user2.xp, '<-- Expected result: "true"')
    console.log(challenge6.points < challenge1.points, '<-- Expected result: "false"')
}
console.groupEnd();

console.groupCollapsed('https://edabit.com/challenge/ifDM26p25bqS8EsFu');
{
    class Player {
        #hp;
        #maxHp;
        // en;
        #maxEn;
        #skills = {}
    
        constructor(name, health, energy, armor) {
            this.name = name;
            this.#maxHp = health;
            this.#maxEn = energy;
            this.armor = armor;
            this.#hp = this.#maxHp;
            this.en = this.#maxEn;
        }
    
        learnSkill(skillName, skillStats) {
            skillName = skillName.toLowerCase();
            skillName = skillName.split(' ').join('');
            this.#skills[skillName] = skillStats;
            this[skillName] = function (target) {
                return this.attack(skillName, this.#skills[skillName], target);
            }
        }
    
        attack(skillName, skill, target) {
            let attackString = '';
            if (this.en - skill.cost < 0) {
                attackString += `${this.name} attempted to use ${skillName}, but didn't have enough energy!`;
                return attackString;
            }
            this.en -= skill.cost;
            this.#hp += skill.heal;
            target.armor = target.armor - skill.penetration >= 0 ? target.armor - skill.penetration : 0;
    
            const damage = (skill.damage * ((100 - target.armor) / 100)).toFixed(2);
            target.setHp(target.getHp() - damage);
    
            attackString += `${this.name} used ${skillName}, ${skill.desc}, against ${target.name}, doing ${damage} damage!` + ' ';
            if (skill.heal > 0) attackString += `${this.name} healed for ${skill.heal} health.` + ' ';
            if (target.getHp() <= 0) attackString += `${target.name} died.`
            else attackString += `${target.name} is at ${target.hpPerc()}.`
            return attackString;
        }
    
        hpPerc() {
            return `${((this.#hp / this.#maxHp) * 100).toFixed(2)}% health`; 
        }
    
        setHp(hp) {
            if (hp < 0 || hp > this.#maxHp) return;
            this.#hp = hp;
        }
        getHp() {
            return this.#hp;
        }
    
        setEn(en) {
            if (en < 0 || en > this.#maxEn) return;
            this.en = en;
        }
    
        getEn() {
            return `${this.#hp} energy`;
        }
    }
    
    const alice = new Player("Alice", 110, 50, 10)
    const bob = new Player("Bob", 100, 60, 20)
    
    alice.learnSkill("fireball", {
        damage: 23,
        penetration: 1.2,
        heal: 5,
        cost: 15,
        desc: "a firey magical attack"
    })
    
    console.log(alice.fireball(bob))
    
    bob.learnSkill("superbeam", {
        damage: 200,
        penetration: 50,
        heal: 50,
        cost: 75,
        desc: "an overpowered attack, pls nerf"
    })
    
    console.log(bob.superbeam(alice))
    console.log("\n----\nBut wait! Bob's back in action!")
    bob.learnSkill('Meteor Strike',{
        damage:118,
        penetration:4,
        heal:5,
        cost:20,
        desc: "an attack that basically ends the game (gg)"
    })
    console.log(bob.meteorstrike(alice));
    }
console.groupEnd();