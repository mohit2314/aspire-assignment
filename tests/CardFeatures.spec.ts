import { mount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
// import { render } from 'vitest-browser-vue'
import { describe, it, expect,beforeEach } from 'vitest'
import CardFeatures from '../src/components/CardFeatures.vue'

describe('FeaturesSection', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders freeze label correctly', () => {

    const wrapper = mount(CardFeatures, {
      props: {
        currentCardId:'1',
        isFreeze: false
      },
    })

    expect(wrapper.text()).toContain('Freeze card') 
  })

  it('renders Un-freeze label correctly', () => {

    const wrapper = mount(CardFeatures, {
      props: {
        currentCardId:'1',
        isFreeze: true
      },
    })

    expect(wrapper.text()).toContain('Unfreeze card') 
  })
})
