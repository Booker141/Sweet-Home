import React from 'react';
import { render, screen } from '@testing-library/react';
import BasicFooter from '../components/BasicFooter/BasicFooter';
import global from '../styles/global.module.css'
describe('BasicFooter', () => {

    test('test_renders_footer_with_all_links_and_text', () => {
        const props = {
            url1: 'https://www.google.com',
            url2: 'https://www.facebook.com',
            url3: 'https://www.twitter.com',
            url4: 'https://www.instagram.com',
            text1: 'Google',
            text2: 'Facebook',
            text3: 'Twitter',
            text4: 'Instagram'
        }
        render(<BasicFooter {...props} />)
    })

    test('test_renders_footer_with_white_line_when_color_is_fafafa', () => {
        const props = {
            url1: 'https://www.google.com',
            url2: 'https://www.facebook.com',
            url3: 'https://www.twitter.com',
            url4: 'https://www.instagram.com',
            text1: 'Google',
            text2: 'Facebook',
            text3: 'Twitter',
            text4: 'Instagram',
            color: '#fafafa'
        }
        render(<BasicFooter {...props} />)
        expect(screen.getByRole('separator')).toHaveClass(global.white__line)
    })


});