document.addEventListener('DOMContentLoaded', () => {
  loadButtons()
})

function loadButtons() {
  let buttons = document.getElementsByClassName('btn')
  Array.from(buttons).forEach((button) => {
    button.addEventListener('click', () => {
      let viewId = button.id
      console.log(viewId)
      showView(viewId)
    })
  })
}

function showView(Id) {
  let view = null
  if (Id == 'btnNotes') {
    //set all other views to hidden
    document.getElementById('viewRules').setAttribute('hidden', true)
    document.getElementById('viewPlayers').setAttribute('hidden', true)
    //set CASE NOTES show
    document.getElementById('viewNotes').removeAttribute('hidden')
    //
  } else if (Id == 'btnRules') {
    view = document.getElementById('viewNotes').setAttribute('hidden', true)
    view = document.getElementById('viewPlayers').setAttribute('hidden', true)
    //set Game Rules to  show
    document.getElementById('viewRules').removeAttribute('hidden')
    //
  } else {
    //set all other views to hidden
    document.getElementById('viewNotes').setAttribute('hidden', true)
    document.getElementById('viewRules').setAttribute('hidden', true)
    //set PLAYERS view to show
    document.getElementById('viewPlayers').removeAttribute('hidden')
  }
}
