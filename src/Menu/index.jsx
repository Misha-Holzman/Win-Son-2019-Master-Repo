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
          Brunch <img className='down-arrow' src='https://i.imgur.com/NzAnCOB.png' />
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
                    <p className='menu-items-expanded'> dou jiang you tiao </p>
                    <p className='menu-price-expanded'> $6/7 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> sweet or savory house-made soy milk + chinese cruller (v vg*)</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> hualien egg bomb </p>
                    <p className='menu-price-expanded'> $8 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> chili sauce, sweet soy + herbs</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> sloppy bao </p>
                    <p className='menu-price-expanded'> $11 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> stew pork, chili + peanuts</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> pan-griddled pork buns </p>
                    <p className='menu-price-expanded'> $11 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> herbs + chili vinaigrette</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> pea shoots </p>
                    <p className='menu-price-expanded'> $11 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> sesame + garlic (v vg gf)</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> turnip cake </p>
                    <p className='menu-price-expanded'> $11 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> charred scallion + egg (v* vg* gf*)</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> o-a jian </p>
                    <p className='menu-price-expanded'> $14 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> beausoleil oyster omelette, heritage pork + charred scallion + basil (gf*)</p>
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
                    <p className='menu-price-expanded'> $15 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> minced heritage pork belly over rice + sunny-up eggs</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> dan bing </p>
                    <p className='menu-price-expanded'> $11 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> thin scallion pancake + two egg herb omelette (v*)</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> big chicken and waffles </p>
                    <p className='menu-price-expanded'> $16 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> taiwanese fried chicken, pan gravy + sesame waffle</p>
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
                    <p className='menu-items-expanded'> sesame noodles </p>
                    <p className='menu-price-expanded'> $15 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> scallions, oyster mushrooms + peanuts (v vg*)</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> side rice </p>
                    <p className='menu-price-expanded'> $2 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> three grain blend</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> side eggs </p>
                    <p className='menu-price-expanded'> $3 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> house scramble </p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> scallion pancake </p>
                    <p className='menu-price-expanded'> $7 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> sweet soy + chili (v* vg*) </p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> hash brown </p>
                    <p className='menu-price-expanded'> $4 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> tofu mayo, fried basil + five spice (v vg gf)</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> xiang tsang </p>
                    <p className='menu-price-expanded'> $7 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> fragrant sweet sausage + fresh garlic (gf)</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> you tiao </p>
                    <p className='menu-price-expanded'> $3 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> chinese cruller (v vg)</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> sesame waffle </p>
                    <p className='menu-price-expanded'> $7 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> maple syrup + butter (2 pieces)</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> tian miantuan </p>
                    <p className='menu-price-expanded'> $9 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> fried sweet dough, vanilla ice cream + sweetened condensed milk <br /> * add butter fried peanuts and cilantro for $2 extra</p>
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
          Dinner <img className='down-arrow' src='https://i.imgur.com/NzAnCOB.png' />
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
                    <p className='menu-description-expanded'> fried sweet dough, vanilla ice cream + sweetened condensed milk. <br /> * Add butter fried peanuts and cilantro for $2 extra</p>
                  </div>

                </div>
              )
              : (
                null
              )
          }
        </div>
        <div className='menu-div'>
          <button onClick={this.showMenu3} className='menu-button'>
          Drinks <img className='down-arrow' src='https://i.imgur.com/NzAnCOB.png' />
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
                  <br />
                  <h2 className='menu-subtitle-items-expanded'> - non-alcoholic - </h2>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> fresh squeezed orange juice </p>
                    <p className='menu-price-expanded'> $7 </p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> caffe vita coffee </p>
                    <p className='menu-price-expanded'> $3/5 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'>(hot or cold brew)</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> rare soybean drink </p>
                    <p className='menu-price-expanded'> $3 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'>(sweetened)</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> tea pot </p>
                    <p className='menu-price-expanded'> $7/9 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'>(eight treasure chrysanthemum or jasmine pearl)</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> soda </p>
                    <p className='menu-price-expanded'> $3 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'>(apple sidra, sarsaparilla, coke, diet coke, sprite, ginger ale)</p>
                  </div>
                  <br />

                  <h2 className='menu-subtitle-items-expanded'> - wine - </h2>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> touraine tradition </p>
                    <p className='menu-price-expanded'> $12/48 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'>gamay + côt, france, 2017 - red</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> forlorn hope </p>
                    <p className='menu-price-expanded'> $13/52 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'>alvarelhão, california, 2016 - red</p>
                  </div>
                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> bigardo </p>
                    <p className='menu-price-expanded'> $15/60 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'>tinta de toro, spain, 2017 - red</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> mourat </p>
                    <p className='menu-price-expanded'> $11/44 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'>chenin blanc + chardonnay, france, 2017 - white</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> azienda agricola cirelli </p>
                    <p className='menu-price-expanded'> $11/44 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'>trebbiano, italy 2015 - white</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> celler frisach </p>
                    <p className='menu-price-expanded'> $12/48 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> garnatxa blanca, spain, 2016 - white</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> borne </p>
                    <p className='menu-price-expanded'> $12/48 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'>pinot noir, california, 2016 - rosé</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> suriol </p>
                    <p className='menu-price-expanded'> $13/52 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'>macabeo, xarel-lo + parellada, spain, 2014 - sparkling</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> lo-fi </p>
                    <p className='menu-price-expanded'> $54 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> cabernet franc, california, 2017 - red</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> tendu </p>
                    <p className='menu-price-expanded'> $50 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'>aglianico, montepulciano + barbera, california 2016 (liter) - red</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> do ferreiro </p>
                    <p className='menu-price-expanded'> $56 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> albariño, spain, 2015 - white</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> sybille kuntz spätlese trocken </p>
                    <p className='menu-price-expanded'> $70 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'>germany, 2012 - white</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> lovamor </p>
                    <p className='menu-price-expanded'> $48 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'>albillo, spain, 2017 - orange</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> kπ real </p>
                    <p className='menu-price-expanded'> $15/60 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'>albillo, spain, 2017 - orange</p>
                  </div>
                  <br />

                  <h2 className='menu-subtitle-items-expanded'> - can and bottle - </h2>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> taiwan beer classic </p>
                    <p className='menu-price-expanded'> $5 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'>(can) – 4.5%, taiwan</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> taiwan beer gold medal </p>
                    <p className='menu-price-expanded'> $9 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'>(20.2 oz bottle) – 4.5%, taiwan</p>
                  </div>

                  <br />

                  <h2 className='menu-subtitle-items-expanded'> - drafts - </h2>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> braven bushwick </p>
                    <p className='menu-price-expanded'> $8 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'>pilsner – 5.5%, new york</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> greenport </p>
                    <p className='menu-price-expanded'> $8 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'>harbor pale ale – 5.3%, new york</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> ithaca flower power </p>
                    <p className='menu-price-expanded'> $8 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'>ipa – 7.5%, new york</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> sunday beer </p>
                    <p className='menu-price-expanded'> $7 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'>lager – 5.7%, new york</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> mikkeller san diego </p>
                    <p className='menu-price-expanded'> $9 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'>n.e. style pale ale - 5.5%, california</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> wölffer no. 139 </p>
                    <p className='menu-price-expanded'> $10 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'>dry rosé cider (10 oz) - 6.9%, new york</p>
                  </div>

                  <br />

                  <h2 className='menu-subtitle-items-expanded'> - cocktails - </h2>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> bloody mary </p>
                    <p className='menu-price-expanded'> $10 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'>vodka, zing zang, chinese celery</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> taiwan beer michelada</p>
                    <p className='menu-price-expanded'> $11 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'>taiwan beer original, lemon, lime, shiro dashi, sriracha, cilantro chili salt rim</p>
                  </div>
                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> mimosa </p>
                    <p className='menu-price-expanded'> $12 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'>fresh squeezed orange juice, sparkling wine</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> vaquero chino </p>
                    <p className='menu-price-expanded'> $12 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'>chili infused scotch, egg white, lemon, lime, simple, basil</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> buddha bless </p>
                    <p className='menu-price-expanded'> $12 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'>ming river baijiu, mattei cap corse blanc, lime, celery seed</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> kinmen white lightning </p>
                    <p className='menu-price-expanded'> $12 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> kinmen kaoliang, cocchi americano, contratto aperitif, lemon</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> teresa teng </p>
                    <p className='menu-price-expanded'> $12 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'>cucumber vodka, sparkling wine, lemon, velvet falernum</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> breakfast of champions </p>
                    <p className='menu-price-expanded'> $13 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'>peanut milk, roasted black sesame, el dorado 5 year rum, rum cream, toasted coconut</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> chiña colada </p>
                    <p className='menu-price-expanded'> $13 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> dark and light rum, cilantro, basil, coconut</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> randy dallas gibson </p>
                    <p className='menu-price-expanded'> $13 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> greenhook gin, pickled WV ramps, rice wine, dry vermouth</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> ghost of phil </p>
                    <p className='menu-price-expanded'> $13 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> jasmine tea infused bourbon, sweet tea, orange bitters</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> brother elephant </p>
                    <p className='menu-price-expanded'> $12 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> arette reposado tequila, allspice dram, oloroso sherry, lemon, demerara</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> taiwan beer amer </p>
                    <p className='menu-price-expanded'> $10 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> taiwan beer original, china-china amer, lemon</p>
                  </div>

                  <br />

                  <h2 className='menu-subtitle-items-expanded'> - whiskey - </h2>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> kavalan </p>
                    <p className='menu-price-expanded'> $16 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'>yilan, taiwan</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> kavalan ex-bourbon</p>
                    <p className='menu-price-expanded'> $21 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'>yilan, taiwan</p>
                  </div>
                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> kavalan port cask </p>
                    <p className='menu-price-expanded'> $24 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'>yilan, taiwan</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> kavalan sherry oak </p>
                    <p className='menu-price-expanded'> $26 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'>yilan, taiwan</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> ledaig </p>
                    <p className='menu-price-expanded'> $14 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'>scotland</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> union horse </p>
                    <p className='menu-price-expanded'> $12 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> kansas</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> stranahan’s </p>
                    <p className='menu-price-expanded'> $14 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'>colorado</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> high wire new southern revival </p>
                    <p className='menu-price-expanded'> $13 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> south carolina</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> johnny smoking gun </p>
                    <p className='menu-price-expanded'> $13 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> michigan</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> four roses single barrel </p>
                    <p className='menu-price-expanded'> $13 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> kentucky</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> eagle rare </p>
                    <p className='menu-price-expanded'> $12 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> kentucky</p>
                  </div>

                  <div className='menu-name-price-div'>
                    <p className='menu-items-expanded'> high west rendezvous rye </p>
                    <p className='menu-price-expanded'> $11 </p>
                  </div>
                  <div className='menu-description-div'>
                    <p className='menu-description-expanded'> park city, utah</p>
                  </div>
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
