export default function(context) {
  const UI = require('sketch/ui')

  var options = [
    'scrim-gradient',
    'cubic-bezier',
    'ease-out-sine',
  ]
  var selection = UI.getSelectionFromUser("Choose type of Gradient", options)

  var ok = selection[2]
  var index = selection[1]
  if (!ok) {
    UI.message("It was incorrect button 🤔")
    return
  }
  if (context.selection.length > 1) {
    UI.message("Only one shape at a time")
    return
  }
  if (context.selection.length < 1) {
    UI.message("You must selected shape")
    return
  }

  const selected = context.selection[0]
  const color = selected.style().fills()[0].color().immutableModelObject().stringValueWithAlpha(true);
  const style = selected.style().addStylePartOfType(0);

  style.isEnabled = true;
  style.setFillType(1);
  const gradient = style.gradient()

  let r = hexToRgb(color).r
  let g = hexToRgb(color).g
  let b = hexToRgb(color).b

  var sketchStopArray = []

  switch (index) {
    case 0: {
      sketchStopArray.push(makeStop([r, g, b, 0], 1))
      sketchStopArray.push(makeStop([r, g, b, 0.002], 0.982))
      sketchStopArray.push(makeStop([r, g, b, 0.008], 0.952))
      sketchStopArray.push(makeStop([r, g, b, 0.021], 0.91))
      sketchStopArray.push(makeStop([r, g, b, 0.042], 0.861))
      sketchStopArray.push(makeStop([r, g, b, 0.075], 0.802))
      sketchStopArray.push(makeStop([r, g, b, 0.126], 0.73))
      sketchStopArray.push(makeStop([r, g, b, 0.194], 0.65))
      sketchStopArray.push(makeStop([r, g, b, 0.278], 0.565))
      sketchStopArray.push(makeStop([r, g, b, 0.382], 0.47))
      sketchStopArray.push(makeStop([r, g, b, 0.541], 0.34))
      sketchStopArray.push(makeStop([r, g, b, 0.738], 0.19))
      sketchStopArray.push(makeStop([r, g, b, 1], 0))
      break
    }
    case 1: {
      sketchStopArray.push(makeStop([r, g, b, 0], 1))
      sketchStopArray.push(makeStop([r, g, b, 0.01457], 0.912))
      sketchStopArray.push(makeStop([r, g, b, 0.05882], 0.826))
      sketchStopArray.push(makeStop([r, g, b, 0.12126], 0.752))
      sketchStopArray.push(makeStop([r, g, b, 0.19309], 0.687))
      sketchStopArray.push(makeStop([r, g, b, 0.2693], 0.628))
      sketchStopArray.push(makeStop([r, g, b, 0.34817], 0.572))
      sketchStopArray.push(makeStop([r, g, b, 0.42866], 0.517))
      sketchStopArray.push(makeStop([r, g, b, 0.50925], 0.462))
      sketchStopArray.push(makeStop([r, g, b, 0.58891], 0.406))
      sketchStopArray.push(makeStop([r, g, b, 0.66692], 0.348))
      sketchStopArray.push(makeStop([r, g, b, 0.7426], 0.287))
      sketchStopArray.push(makeStop([r, g, b, 0.81522], 0.222))
      sketchStopArray.push(makeStop([r, g, b, 0.88294], 0.153))
      sketchStopArray.push(makeStop([r, g, b, 0.94505], 0.079))
      sketchStopArray.push(makeStop([r, g, b, 1], 0))
      break
    }
    case 2: {
      sketchStopArray.push(makeStop([r, g, b, 0], 1))
      sketchStopArray.push(makeStop([r, g, b, 0.011], 0.906))
      sketchStopArray.push(makeStop([r, g, b, 0.042], 0.814))
      sketchStopArray.push(makeStop([r, g, b, 0.089], 0.729))
      sketchStopArray.push(makeStop([r, g, b, 0.147], 0.65))
      sketchStopArray.push(makeStop([r, g, b, 0.213], 0.577))
      sketchStopArray.push(makeStop([r, g, b, 0.283], 0.509))
      sketchStopArray.push(makeStop([r, g, b, 0.357], 0.445))
      sketchStopArray.push(makeStop([r, g, b, 0.433], 0.384))
      sketchStopArray.push(makeStop([r, g, b, 0.511], 0.325))
      sketchStopArray.push(makeStop([r, g, b, 0.591], 0.268))
      sketchStopArray.push(makeStop([r, g, b, 0.672], 0.213))
      sketchStopArray.push(makeStop([r, g, b, 0.753], 0.159))
      sketchStopArray.push(makeStop([r, g, b, 0.834], 0.106))
      sketchStopArray.push(makeStop([r, g, b, 0.917], 0.053))
      sketchStopArray.push(makeStop([r, g, b, 1], 0))
      break
    }

  }

  gradient.setStops(sketchStopArray)

  UI.message("That's great 🔥")
  selected.style().fills().splice(0,1)
}

function makeColor(c) {
  return MSImmutableColor.colorWithRed_green_blue_alpha(
    c[0] / 255,
    c[1] / 255,
    c[2] / 255,
    c[3]
  ).newMutableCounterpart()
}

function makeStop(color, position) {
  return MSGradientStop.stopWithPosition_color_(position, makeColor(color))
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
