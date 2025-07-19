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
 * The tiny_supersub plugin for Moodle.
 *
 * @module      tiny_supersub
 * @copyright   2025 Philipp Imhof <philipp.imhof@ksso.ch>
 * @license     https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

import {
    superscriptButtonName,
    subscriptButtonName,
} from './common';

import {
    addContextmenuItem,
    addToolbarButtons,
} from 'editor_tiny/utils';

const getToolbarConfiguration = (instanceConfig) => {
    let toolbar = instanceConfig.toolbar;
    toolbar = addToolbarButtons(toolbar, 'formatting', [
        superscriptButtonName,
        subscriptButtonName,
    ]);

    return toolbar;
};

const getContextMenuConfiguration = (menu) => {
    if (!menu) {
        menu = '';
    }
    return addContextmenuItem(menu, '|', superscriptButtonName, subscriptButtonName);
};

export const configure = (instanceConfig) => {
    return {
        toolbar: getToolbarConfiguration(instanceConfig),
        // eslint-disable-next-line camelcase
        quickbars_selection_toolbar: getContextMenuConfiguration(instanceConfig.quickbars_selection_toolbar),
    };
};