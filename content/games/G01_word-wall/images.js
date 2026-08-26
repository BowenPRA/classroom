// content/games/G01_word-wall/images.js
// Every picture tile, imported so Vite hashes it and respects the /classroom/
// base. levels.js refers to these by key (`img: 'cow'`); one missing photo is
// then one obvious hole here rather than a broken path buried in the data.
// Licences: images/CREDITS.json — all Wikimedia Commons, PD / CC0 / CC-BY(-SA)
// / GFDL. One name to note: the WINDOW tile is `windowpane`, because an import
// called `window` shadows the global inside this module.
//
// Ten of these are cooked dishes rather than objects — rice, noodles, soup,
// dumpling, springroll, friedegg, chips, pancake, pizza, yoghurt — and they
// exist for "How Do We Cook It?", which sorts by the method rather than by the
// food. Pick photographs for that wall the way you would for any other: one
// dish, filling the frame, no hands and no menu around it. A plate of chips
// next to a steak is a picture of a steak to a five-year-old.
import ant from './images/ant.jpg'
import apple from './images/apple.jpg'
import ball from './images/ball.jpg'
import banana from './images/banana.jpg'
import bed from './images/bed.jpg'
import bee from './images/bee.jpg'
import biscuit from './images/biscuit.jpg'
import boat from './images/boat.jpg'
import bottle from './images/bottle.jpg'
import bowl from './images/bowl.jpg'
import bread from './images/bread.jpg'
import broccoli from './images/broccoli.jpg'
import bucket from './images/bucket.jpg'
import bulb from './images/bulb.jpg'
import bus from './images/bus.jpg'
import butter from './images/butter.jpg'
import butterfly from './images/butterfly.jpg'
import cake from './images/cake.jpg'
import car from './images/car.jpg'
import carrot from './images/carrot.jpg'
import cat from './images/cat.jpg'
import chair from './images/chair.jpg'
import cheese from './images/cheese.jpg'
import chips from './images/chips.jpg'
import chocolate from './images/chocolate.jpg'
import chopsticks from './images/chopsticks.jpg'
import clock from './images/clock.jpg'
import cloud from './images/cloud.jpg'
import coconut from './images/coconut.jpg'
import coffee from './images/coffee.jpg'
import coin from './images/coin.jpg'
import comb from './images/comb.jpg'
import cow from './images/cow.jpg'
import crab from './images/crab.jpg'
import crayon from './images/crayon.jpg'
import dog from './images/dog.jpg'
import doughnut from './images/doughnut.jpg'
import duck from './images/duck.jpg'
import dumpling from './images/dumpling.jpg'
import egg from './images/egg.jpg'
import elephant from './images/elephant.jpg'
import fish from './images/fish.jpg'
import flower from './images/flower.jpg'
import fork from './images/fork.jpg'
import fridge from './images/fridge.jpg'
import friedegg from './images/friedegg.jpg'
import ginger from './images/ginger.jpg'
import giraffe from './images/giraffe.jpg'
import glasses from './images/glasses.jpg'
import glue from './images/glue.jpg'
import grapes from './images/grapes.jpg'
import grass from './images/grass.jpg'
import hat from './images/hat.jpg'
import hen from './images/hen.jpg'
import icecream from './images/icecream.jpg'
import jar from './images/jar.jpg'
import juice from './images/juice.jpg'
import kettle from './images/kettle.jpg'
import key from './images/key.jpg'
import kite from './images/kite.jpg'
import lamp from './images/lamp.jpg'
import leaf from './images/leaf.jpg'
import microwave from './images/microwave.jpg'
import milk from './images/milk.jpg'
import monkey from './images/monkey.jpg'
import moon from './images/moon.jpg'
import nail from './images/nail.jpg'
import noodles from './images/noodles.jpg'
import octopus from './images/octopus.jpg'
import onion from './images/onion.jpg'
import orange from './images/orange.jpg'
import oven from './images/oven.jpg'
import owl from './images/owl.jpg'
import pan from './images/pan.jpg'
import pancake from './images/pancake.jpg'
import parrot from './images/parrot.jpg'
import pencil from './images/pencil.jpg'
import penguin from './images/penguin.jpg'
import pig from './images/pig.jpg'
import pillow from './images/pillow.jpg'
import pizza from './images/pizza.jpg'
import plane from './images/plane.jpg'
import pot from './images/pot.jpg'
import potato from './images/potato.jpg'
import prawn from './images/prawn.jpg'
import rainbow from './images/rainbow.jpg'
import rice from './images/rice.jpg'
import rug from './images/rug.jpg'
import sandpit from './images/sandpit.jpg'
import scissors from './images/scissors.jpg'
import seesaw from './images/seesaw.jpg'
import shark from './images/shark.jpg'
import sheep from './images/sheep.jpg'
import shell from './images/shell.jpg'
import shoe from './images/shoe.jpg'
import slide from './images/slide.jpg'
import snake from './images/snake.jpg'
import snow from './images/snow.jpg'
import soap from './images/soap.jpg'
import sock from './images/sock.jpg'
import sofa from './images/sofa.jpg'
import soup from './images/soup.jpg'
import spider from './images/spider.jpg'
import spoon from './images/spoon.jpg'
import springroll from './images/springroll.jpg'
import squid from './images/squid.jpg'
import starfish from './images/starfish.jpg'
import straw from './images/straw.jpg'
import sun from './images/sun.jpg'
import tea from './images/tea.jpg'
import teddy from './images/teddy.jpg'
import television from './images/television.jpg'
import tiger from './images/tiger.jpg'
import toaster from './images/toaster.jpg'
import toothbrush from './images/toothbrush.jpg'
import towel from './images/towel.jpg'
import tree from './images/tree.jpg'
import tshirt from './images/tshirt.jpg'
import turtle from './images/turtle.jpg'
import water from './images/water.jpg'
import whale from './images/whale.jpg'
import windowpane from './images/windowpane.jpg'
import wok from './images/wok.jpg'
import woodenspoon from './images/woodenspoon.jpg'
import yoghurt from './images/yoghurt.jpg'

export const PICS = {
  ant, apple, ball, banana, bed, bee, biscuit, boat, bottle, bowl, bread,
  broccoli, bucket, bulb, bus, butter, butterfly, cake, car, carrot, cat,
  chair, cheese, chips, chocolate, chopsticks, clock, cloud, coconut,
  coffee, coin, comb, cow, crab, crayon, dog, doughnut, duck, dumpling,
  egg, elephant, fish, flower, fork, fridge, friedegg, ginger, giraffe,
  glasses, glue, grapes, grass, hat, hen, icecream, jar, juice, kettle,
  key, kite, lamp, leaf, microwave, milk, monkey, moon, nail, noodles,
  octopus, onion, orange, oven, owl, pan, pancake, parrot, pencil, penguin,
  pig, pillow, pizza, plane, pot, potato, prawn, rainbow, rice, rug,
  sandpit, scissors, seesaw, shark, sheep, shell, shoe, slide, snake, snow,
  soap, sock, sofa, soup, spider, spoon, springroll, squid, starfish,
  straw, sun, tea, teddy, television, tiger, toaster, toothbrush, towel,
  tree, tshirt, turtle, water, whale, windowpane, wok, woodenspoon,
  yoghurt,
}
