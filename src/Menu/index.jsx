import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

class Menu extends Component {
  constructor () {
    super()
    this.state = {
      showMenu1: false,
      showMenu2: false,
      showMenu3: false
    }
    
    this.showMenu1 = this.showMenu1.bind(this)
    this.showMenu2 = this.showMenu2.bind(this)
    this.showMenu3 = this.showMenu3.bind(this)
    this.closeMenu1 = this.closeMenu1.bind(this)
    this.closeMenu2 = this.closeMenu2.bind(this)
    this.closeMenu3 = this.closeMenu3.bind(this)
  }

  showMenu1 (event) {
    event.preventDefault()
    
    this.setState({ showMenu1: true }, () => {
      document.addEventListener('click', this.closeMenu1)
    })
  }

  showMenu2 (event) {
    event.preventDefault()
    
    this.setState({ showMenu2: true }, () => {
      document.addEventListener('click', this.closeMenu2)
    })
  }

  showMenu3 (event) {
    event.preventDefault()
    
    this.setState({ showMenu3: true }, () => {
      document.addEventListener('click', this.closeMenu3)
    })
  }

  closeMenu1 (event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu1: false }, () => {
        document.removeEventListener('click', this.closeMenu1)
      })  
      
    }
  }

  closeMenu2 (event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu2: false }, () => {
        document.removeEventListener('click', this.closeMenu2)
      })  
      
    }
  }

  closeMenu3 (event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu3: false }, () => {
        document.removeEventListener('click', this.closeMenu3)
      })  
      
    }
  }

  render () {
    return (
      <div className='menu-container' id='menu'>
        <img className='title' src='https://i.imgur.com/5eWQF47.png' />
        <div className='menu-div'>
          <button onClick={this.showMenu1} className='menu-button'>
          Brunch
          </button>

          {
            this.state.showMenu1
              ? (
                <div
                  className='menu1'
                  ref={(element) => {
                    this.dropdownMenu = element
                  }}
                >
                  <h2 className='menu-title-items-expanded'> Food </h2>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> marinated cucumbers </p>
                    <p className='menu-price-expanded'> $6 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> garlic + cilantro (v vg gf)</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> roasted peanuts </p>
                    <p className='menu-price-expanded'> $5 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> chinese five spice + prickly ash (v* vg* gf*)</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> scallion pancake </p>
                    <p className='menu-price-expanded'> $7 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> sweet soy + chili (v* vg*)</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> stinky tofu </p>
                    <p className='menu-price-expanded'> $7 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> fermented chinese broccoli, sweet soy + chili (v vg gf*)</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> pan-griddled pork buns </p>
                    <p className='menu-price-expanded'> $11 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> herbs + chili vinaigrette</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> turnip cake </p>
                    <p className='menu-price-expanded'> $11 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> charred scallion + egg (v* vg* gf*)</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> sloppy bao </p>
                    <p className='menu-price-expanded'> $11 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> stew pork, chili + peanuts</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> bk egg bomb </p>
                    <p className='menu-price-expanded'> $19 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> jia dan tsung yuo bing + wagyu beef tartare</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> o-a jian </p>
                    <p className='menu-price-expanded'> $14 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> beausoleil oyster omelette, heritage pork + charred scallion + basil (gf*)</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> pea shoots </p>
                    <p className='menu-price-expanded'> $11 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> sesame + garlic (v vg gf)</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> fried eggplant </p>
                    <p className='menu-price-expanded'> $11 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> black vinegar, kefir cheese + spiced cashews (v vg* gf*)</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> guohua street salad </p>
                    <p className='menu-price-expanded'> $15 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> grilled shrimp, smoked tofu, peanuts golden raisin + mango</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> clams and basil </p>
                    <p className='menu-price-expanded'> $16 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> butternut squash and red kabocha pumpkin, shaoxing rice wine + scallion pancake</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> lu rou fan </p>
                    <p className='menu-price-expanded'> $16 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> minced heritage pork belly, fermented chinese broccoli + soy egg</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> flys head </p>
                    <p className='menu-price-expanded'> $15 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> red wattle pork shoulder, garlic chives, fermented black beans + bird eye chili (gf*)</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> nutritious sandwich </p>
                    <p className='menu-price-expanded'> $14 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> shrimp cake, pickled pineapple + fried mian tuan</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> big chicken bun </p>
                    <p className='menu-price-expanded'> $16 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> fermented tofu mayo, herbs + pollo bao</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> beef roll </p>
                    <p className='menu-price-expanded'> $19 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> n.y. grass-fed beef shank, scallion pancake, long pepper + egg</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> danzi noodles </p>
                    <p className='menu-price-expanded'> $17 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> heritage pork, south carolina shrimp + superior broth</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> zhajiangmian </p>
                    <p className='menu-price-expanded'> $17 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> colorado lamb, yellow bean paste + cucumbers</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> sesame noodles </p>
                    <p className='menu-price-expanded'> $15 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> scallions, oyster mushrooms + peanuts (v vg*)</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> wu yu zi mian </p>
                    <p className='menu-price-expanded'> $23 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> cured mullet roe, chili + cilantro</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> side rice </p>
                    <p className='menu-price-expanded'> $2 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> three grain blend</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> tian miantuan </p>
                    <p className='menu-price-expanded'> $9 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> fried sweet dough, vanilla ice cream + sweetened condensed milk. <br/> * Add butter fried peanuts and cilantro for $2 extra</p>
                  </div>

                  <h2 className='menu-title-items-expanded'> Drinks </h2>
                  <h2 className='menu-subtitle-items-expanded'> - wine - </h2>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> touraine tradition </p>
                    <p className='menu-price-expanded'> $12/48 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'>gamay + côt, france, 2017 - red</p>
                  </div>

                </div>
              )
              : (
                null
              )
          }
        </div>
        <div className='menu-div'>
          <button onClick={this.showMenu2} className='menu-button'>
          Dinner
          </button>

          {
            this.state.showMenu2
              ? (
                <div
                  className='menu2'
                  ref={(element) => {
                    this.dropdownMenu = element
                  }}
                >
                  <p className='menu-items-expanded'> Menu item 1 </p>
                </div>
              )
              : (
                null
              )
          }
        </div>
        <div className='menu-div'>
          <button onClick={this.showMenu3} className='menu-button'>
          Drinks
          </button>

          {
            this.state.showMenu3
              ? (
                <div
                  className='menu3'
                  ref={(element) => {
                    this.dropdownMenu = element
                  }}
                >
                  <button className='menu-items-expanded'> Menu item 1 </button>
                  <button className='menu-items-expanded'> Menu item 2 </button>
                  <button className='menu-items-expanded'> Menu item 3 </button>
                </div>
              )
              : (
                null
              )
          }
        </div>
      </div>
    )
  }
}

export default Menu

// <img className='title' src='https://i.imgur.com/5eWQF47.png' />
// <div>
//   <img src='https://i.imgur.com/OQrMeK2.png' />
// </div>
// <div>
//   <img src='https://i.imgur.com/eKNXAy2.png' />
// </div>
