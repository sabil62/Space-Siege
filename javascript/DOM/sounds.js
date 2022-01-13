function getSound(soundname) {
  let audio = new Audio();
  audio.src = "../../assets/sounds/" + soundname;
  audio.preload = "auto";
  return audio;
}

const audios = [
  new getSound("2 hover.mp3"),
  new getSound("4 click.mp3"),
  new getSound("10 coin collect.mp3"),
  new getSound("click_long.ogg"),
  new getSound("click.ogg"),
  new getSound("coins.mp3"), //5
  new getSound("explosion1.ogg"),
  new getSound("explosion1.ogg"),
  new getSound("fire.ogg"),
  new getSound("hover forceField_001.ogg"),
  new getSound("playbutton.ogg"), //10
  new getSound("round_1.ogg"),
  new getSound("round_2.ogg"),
  new getSound("round_3.ogg"),
  new getSound("tone1.ogg"),
  new getSound("unlock.ogg"), //15
  new getSound("you_lose.ogg"),
  new getSound("you_win.ogg"),
  new getSound("z click hard.wav"),
  new getSound("z click modern.wav"),
  new getSound("z hard interface.wav"), //20
  new getSound("z hard typewritter.wav"),
  new getSound("z interface.wav"),
  new getSound("z modern tech.wav"), //22
];

export default audios;
