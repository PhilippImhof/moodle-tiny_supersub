// This file is part of Moodle - https://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <https://www.gnu.org/licenses/>.

/**
 * Commands helper for the Moodle tiny_supersub plugin.
 *
 * @module      tiny_supersub
 * @copyright   2025 Philipp Imhof <philipp.imhof@ksso.ch>
 * @license     https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

import {get_string as getString} from 'core/str';
import {
    component,
    superscriptButtonName,
    subscriptButtonName,
} from './common';

/**
 * Get the setup function for the buttons.
 *
 * This is performed in an async function which ultimately returns the registration function as the
 * Tiny.AddOnManager.Add() function does not support async functions.
 *
 * @returns {function} The registration function to call within the Plugin.add function.
 */
export const getSetup = async() => {
    const [
        btnSubscriptTooltip,
        btnSuperscriptTooltip,
    ] = await Promise.all([
        getString('btnSubscriptTooltip', component),
        getString('btnSuperscriptTooltip', component),
    ]);

    return (editor) => {
        editor.ui.registry.addButton(superscriptButtonName, {
            icon: 'superscript',
            tooltip: btnSuperscriptTooltip,
            onAction: () => editor.execCommand('superscript'),
        });

        editor.ui.registry.addButton(subscriptButtonName, {
            icon: 'subscript',
            tooltip: btnSubscriptTooltip,
            onAction: () => editor.execCommand('subscript'),
        });
    };
};
