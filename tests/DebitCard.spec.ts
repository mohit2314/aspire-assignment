import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import DebitCard from '@/components/common/DebitCard.vue'

describe('DebitCard.vue', () => {
  const mockCard = {
    id: '1',
    name: 'John Doe',
    number: '1234567890122020',
    expiry: '12/24',
    isFrozen: false,
    bgColor: '#ff6600',
  }

  it('renders cardholder name', () => {
    const wrapper = mount(DebitCard, {
      props: { debitCard: mockCard },
    })

    expect(wrapper.text()).toContain('John Doe')
  })

  it('renders expiry date correctly', () => {
    const wrapper = mount(DebitCard, {
      props: { debitCard: mockCard },
    })

    expect(wrapper.text()).toContain('Thru: 12/24')
  })

  it('applies correct background color', () => {
    const wrapper = mount(DebitCard, {
      props: { debitCard: mockCard },
    })

    const card = wrapper.find('.credit__card-body')
    expect(card.attributes('style')).toContain('background-color: rgb(255, 102, 0)') // as browser converts hex to rgb
  })

  it('applies 100% opacity when card is not frozen', () => {
    const wrapper = mount(DebitCard, {
      props: { debitCard: { ...mockCard, isFrozen: false } },
    })

    const card = wrapper.find('.credit__card-body')
    expect(card.attributes('style')).toContain('opacity: 1')
  })

  it('applies 50% opacity when card is frozen', () => {
    const wrapper = mount(DebitCard, {
      props: { debitCard: { ...mockCard, isFrozen: true } },
    })

    const card = wrapper.find('.credit__card-body')
    expect(card.attributes('style')).toContain('opacity: 0.5')
  })

  it('renders 12 white dots and visible last 4 digits', () => {
    const wrapper = mount(DebitCard, {
      props: { debitCard: mockCard },
    })

    const dots = wrapper.findAll('.white-dot')
    expect(dots.length).toBe(12)
    expect(wrapper.text()).toContain('2020')
  })

  it('shows CVV masked as "***"', () => {
    const wrapper = mount(DebitCard, {
      props: { debitCard: mockCard },
    })

    expect(wrapper.text()).toContain('CVV:')
    expect(wrapper.text()).toContain('* * *')
  })
})
