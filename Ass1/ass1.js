(function () {
    'use strict';

    function generateResume() {
        const get = id => {
            const el = document.getElementById(id);
            return el ? el.value : '';
        };

        const name = get('name');
        const title = get('title');
        const email = get('email');
        const phone = get('phone');
        const summary = get('summary');
        const experience = get('experience');
        const education = get('education');
        const skills = get('skills');

        const preview = `
            <h2>${name ? escapeHtml(name) : 'Your Name'}</h2>
            <h3 class="highlight">${title ? escapeHtml(title) : 'Professional Title'}</h3>
            <p><b>Email:</b> ${email ? escapeHtml(email) : 'example@email.com'} | <b>Phone:</b> ${phone ? escapeHtml(phone) : '000-000-0000'}</p>
            <hr>
            <h3>About Me</h3>
            <p>${summary ? nl2br(escapeHtml(summary)) : 'A short professional introduction goes here.'}</p>
            <h3>Experience</h3>
            <p>${experience ? nl2br(escapeHtml(experience)) : 'List your past jobs and accomplishments.'}</p>
            <h3>Education</h3>
            <p>${education ? nl2br(escapeHtml(education)) : 'Include your degrees or certifications.'}</p>
            <h3>Skills</h3>
            <p>${skills ? escapeHtml(skills) : 'List your skills here.'}</p>
        `;

        const container = document.getElementById('resume-preview');
        if (container) container.innerHTML = preview;
    }

    function escapeHtml(str) {
        return String(str).replace(/[&<>"'`]/g, function (s) {
            return ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#39;',
                '`': '&#96;'
            })[s];
        });
    }

    function nl2br(str) {
        return str.replace(/\r?\n/g, '<br>');
    }

    function attach() {
        const btn = document.getElementById('previewBtn');
        if (btn) btn.addEventListener('click', generateResume);
    }

    window.generateResume = generateResume;

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', attach);
    } else {
        attach();
    }

})();
