var draw = function() {

    if (keyIsPressed && keyCode === UP){
        background(181, 56, 179);
        fill(51, 36, 51);
        textFont(createFont("script"));
        textSize(38);
        text("Founder:",112,61);
        textSize(25);
        text("The founder and leader for this team is\nAlbus Dumbledore.",32,105);

        var Albusrobe = function(x, y){
            fill(0, 102, 255);stroke(0, 102, 255);
            quad(x-25, y+15, x-25, y+40, x-36, y+75, x-50, y+70);
            quad(x+25, y+15, x+25, y+40, x+36, y+75, x+50, y+70);
            quad(x-25, y+15, x+25, y+15, x+30, y+135, x-30, y+135);
            fill(135, 183, 255);
            quad(x-7, y+15, x+7, y+15, x-10, y+135, x+10, y+135);
            quad(x-36, y+75, x-38, y+80, x-53, y+75, x-50, y+70);
            quad(x+36, y+75, x+38, y+80, x+53, y+75, x+50, y+70);
            strokeWeight(3);stroke(138, 132, 131);
            line(x-42, y+82, x-22, y+95);fill(245, 230, 155);strokeWeight(0.1);stroke(0, 0, 0);
            quad(x-39, y+80, x-41, y+87, x-53, y+80, x-50, y+77);
            quad(x+39, y+80, x+41, y+87, x+53, y+80, x+50, y+77);
        };
        var Albuseyes = function(x, y){noStroke();
            fill(255, 255, 255);
            ellipse(x+15, y+10, 10, 10);
            ellipse(x+35, y+10, 10, 10);
            fill(4, 171, 222);
            ellipse(x+15, y+10, 7, 7);
            ellipse(x+35, y+10, 7, 7);
            stroke(0, 0, 0);strokeWeight(2);
            point(x+15, y+10);
            point(x+35, y+10);
            stroke(255, 255, 255);
            point(x+34, y+8);
            point(x+14, y+8);
            stroke(189, 187, 187);fill(255, 255, 255, 100);strokeWeight(0.2);
            arc(x+15, y+10, 12, 10, 0, 180);
            arc(x+35, y+10, 12, 10, 0, 180);
            noFill();
            arc(x+25, y+10, 8, 2, 180, 360);
            arc(x+44, y+10, 4, 2, 180, 360);
            arc(x+5, y+10, 4, 2, 180, 360);
        };
        var AlbusDumbledore = function(x, y){
            noStroke();
            fill(255, 255, 255);
            arc(x+25, y, 47, 40, 170, 370);
            rect(x+2.3, y, 46, 40);
            fill(245, 230, 155);
            rect(x+5, y, 40, 15);
            triangle(x+5, y+15, x+45, y+15, x+25, y+25);
            noFill();stroke(255, 216, 99);strokeWeight(1);
            arc(x+25, y+14, 3, 1, 0, 180);
            stroke(252, 197, 184);
            arc(x+25, y+17, 5, 2, 0, 180);
            Albusrobe(x+25, y+10);
            Albuseyes(x, y);noStroke();
            fill(255, 255, 255);
            arc(x+25, y, 40, 34, 170, 370);
            arc(x+25, y+22, 31, 34, 349, 550);
            ellipse(x+25, y+38, 30, 34);
            ellipse(x+25, y+56, 25, 34);
            ellipse(x+25, y+68, 20, 34);
            ellipse(x+25, y+84, 10, 29);
        };
        AlbusDumbledore(210, 200);

    }
    else if (keyIsPressed && keyCode === RIGHT){
        mouseClicked=function(){
            println("\nhttps://www.kahanacademy.org/cs/make-a-potion/6554164581105664\n\nYour program could be here next!\nBetter get coding!");
        };
        background(29, 135, 161);
        textSize(20);
        fill(230, 216, 21);
        text("To see this month's top HP program,\ncopy the link in the print-in below to\nyour browser:\n                                   |\n                                   |",30,53);
        textSize(27);
        text("Enjoy!",40,200);
        stroke(230, 216, 21);
        strokeWeight(1.5);
        line(227, 171, 215, 155);
        line(229, 171, 240, 155);
    }

    else if (keyIsPressed && keyCode === DOWN){
        background(153, 133, 94);
        fill(54, 42, 31);
        textFont(createFont("fantasy"));
        textSize(38);
        text("Members:",95,45);
        textFont(createFont("script"));
        fill(89, 52, 89);
        strokeWeight(1.4);
        rect(1, 60, 399, 7);
        fill(54, 42, 31);
        textSize(16.5);
        text("1. Pansy Parkingson\n2. 1038\n3. Professor Lupin\n4. Emberlea\n5. LangdonLodge\n6. Colin\n7. Olivianna W.\n8. javierflores\n9. PinkieLord",35,84.2);text("10. Jackson M. Wayne\n11. Laura Alexis\n12. Hank Mekallis\n13. Aknife87\n14. ThE CoOl duDe\n15. Hermoine\n16. Rebecca Roso",27.9,261.5);
        text("17. darzellay\n18. Adeline Liem\n19. Daniel Bensley\n20. HarryPotterFanGirl200\n21. Chocoloco1\n22. lucyboyle\n23. Arch8370\n24. nobody\n25. Tony Firepaw\n26. Hermione Granger\n27. Marceline Abadeer\n28. STORMFUR\n29. craigtheJollyfatman\n30. vakama\n31. Goblet of Fire Programming",208,84.2);
    }

    else if (keyIsPressed && keyCode === LEFT){
        background(12, 67, 156);
        fill(242, 209, 46);
        textFont(createFont("script"));
        textSize(35);
        text("Co-Founder:",90,57);
        textSize(21.3);
        text("Lillyin Grace McCannon, Whose awesome Harry\nPotter Programs inspired me to start  this team.",20.4,98);

        var robe = function(x, y){
            fill(0, 0, 0);stroke(0, 0, 0);
            quad(x-25, y+15, x-25, y+40, x-36, y+75, x-50, y+70);
            quad(x+25, y+15, x+25, y+40, x+36, y+75, x+50, y+70);
            quad(x-25, y+15, x+25, y+15, x+30, y+135, x-30, y+135);
            fill(255, 0, 0);
            quad(x-7, y+15, x+7, y+15, x-10, y+135, x+10, y+135);
            quad(x-36, y+75, x-38, y+80, x-53, y+75, x-50, y+70);
            quad(x+36, y+75, x+38, y+80, x+53, y+75, x+50, y+70);
            strokeWeight(3);stroke(26, 13, 9);
            line(x-42, y+82, x-22, y+95);fill(255, 232, 186);strokeWeight(0.1);stroke(0, 0, 0);
            quad(x-39, y+80, x-41, y+87, x-53, y+80, x-50, y+77);
            quad(x+39, y+80, x+41, y+87, x+53, y+80, x+50, y+77);
        };

        var Harryseyes = function(x, y){noStroke();
            fill(255, 255, 255);
            ellipse(x+15, y+10, 10, 10);
            ellipse(x+35, y+10, 10, 10);
            fill(40, 125, 23);
            ellipse(x+15, y+10, 7, 7);
            ellipse(x+35, y+10, 7, 7);
            stroke(0, 0, 0);strokeWeight(2);
            point(x+15, y+10);
            point(x+35, y+10);
            stroke(255, 255, 255);
            point(x+34, y+8);
            point(x+14, y+8);
            stroke(0, 0, 0);fill(255, 255, 255, 10);strokeWeight(0.6);
            ellipse(x+15, y+10, 12, 12);
            ellipse(x+35, y+10, 12, 12);
            noFill();
            arc(x+25, y+10, 8, 2, 180, 360);
            arc(x+44, y+10, 4, 2, 180, 360);
            arc(x+5, y+10, 4, 2, 180, 360);
        };
        var harryshair = function(x, y){fill(0, 0, 0);
            noStroke();
            quad(x+13, y+24, x+24, y, x-8, y, x+5, y+24);
        };
        var HarryJPotter = function(x, y){
            noStroke();
            fill(0, 0, 0);
            arc(x+25, y, 47, 40, 170, 370);
            rect(x+2, y-1, 47, 15);
            triangle(x+2, y+14, x+47, y+14, x+25, y+27);
            fill(245, 230, 155);
            rect(x+5, y-1, 40, 16);
            triangle(x+5, y+15, x+45, y+15, x+25, y+25);
            noFill();stroke(255, 216, 99);strokeWeight(1);
            arc(x+25, y+14, 3, 1, 0, 180);
            stroke(252, 197, 184);
            arc(x+25, y+17, 5, 2, 0, 180);
            robe(x+25, y+10);
            Harryseyes(x, y);
            fill(0, 0, 0);
            arc(x+25, y-1, 45, 40, 170, 370);
            stroke(250, 90, 90);
            line(x+23, y+1, x+25, y+3);
            line(x+25, y+3, x+23, y+4);
            line(x+23, y+4, x+25, y+7);
        };
        HarryJPotter(210, 200);

    }
    else{
        background(24, 125, 20);
        stroke(255, 222, 38);
        strokeWeight(13.0);
        line(194, 106, 227, 203);
        line(179, 205, 225, 203);
        line(176, 205, 209, 311);

//text
        textSize(40);
        fill(0, 0, 0);
        textFont(createFont("script",41));
        text("Potter Programming Studios",13.6,50.5);
        fill(255, 191, 0);
        text("Potter Programming Studios",17,46.9);
        textFont(createFont("standard"));
        fill(219, 93, 15);
        textSize(20.3);
        text("This is a place for Harry Potter fans to get\n together and make programs based on\n the Harry Potter book series!\n\nTo join, you must have at least 25,000\n points, ten moon badges, and some\n programming experience. You also must\n be a Harry Potter fan! If you meet these\n requirements, please apply in tips and\n thanks.\n\nPress the up key to see founder, down to\nsee members and left to see co-leader(s).",13.0,104.6);
        stroke(59, 50, 39);
        strokeWeight(1.8);
        fill(148, 87, 16);
        rect(0, 69.2, 400, 10.5);

    }
};
