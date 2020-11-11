const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300

//for(var k = 0; k <=width; k = k + 80) {
  //divisions.push(new Divisions(k, height*divisionHeight/2,10,divisionHeight));
  //}

var ground;
var div1,div2,div3,div4,div5,div6,div7;
var plink1,plink2,plink3,plink4,plink5,plink6,plink7,plink8,plink9,
plink10,plink11,plink12,plink13,plink14,plink15,plink16
,plink17,plink18;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

    ground = new Ground(240,795,480,7);
    div1 = new Divisions(475,600,7,400);
    div2 = new Divisions(5,600,7,400);
    div3 = new Divisions(240,600,7,400);
    div4 = new Divisions(355,600,7,400);
    div5 = new Divisions(122,600,7,400);

    plink1 = new Plinko(68,100,10);
    plink2 = new Plinko(136,100,10);
    plink3 = new Plinko(204,100,10);
    plink4 = new Plinko(272,100,10);
    plink5 = new Plinko(340,100,10);
    plink6 = new Plinko(408,100,10);

    plink7 = new Plinko(60,200,10);
    plink8 = new Plinko(120,200,10);
    plink9 = new Plinko(180,200,10);
    plink10 = new Plinko(240,200,10);
    plink11 = new Plinko(300,200,10);
    plink12 = new Plinko(360,200,10);
    plink13 = new Plinko(420,200,10);

    plink14 = new Plinko(68,300,10);
    plink15 = new Plinko(136,300,10);
    plink16 = new Plinko(204,300,10);
    plink17 = new Plinko(272,300,10);
    plink18 = new Plinko(340,300,10);
    plink19 = new Plinko(408,300,10);

}

function draw() {
  background(0);  

  Engine.update(engine);
  if(frameCount%30===0){
    particles.push(new Particles(random(width/2*10,width/2+10),10,10));
  }
  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }
  ground.display();
  div1.display();
  div2.display();
  div3.display();
  div4.display();
  div5.display();
  plink1.display();
  plink2.display();
  plink3.display();
  plink4.display();
  plink5.display();
  plink6.display();

  plink7.display();
  plink8.display();
  plink9.display();
  plink10.display();
  plink11.display();
  plink12.display();
  plink13.display();


  plink14.display();
  plink15.display();
  plink16.display();
  plink17.display();
  plink18.display();
  plink19.display();


  drawSprites();
}

//for(var k = 0; k <=width; k = k + 80) {
//divisions.push(new Divisions(k, height*divisionHeight/2,10,divisionHeight));
//}