<?php
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
 * TinyMCE superscript and subscript button plugin for Moodle
 *
 * @package     tiny_supersub
 * @copyright   2025 Philipp Imhof <philipp.imhof@ksso.ch>
 * @license     https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

namespace tiny_supersub;

use editor_tiny\plugin;
use editor_tiny\plugin_with_buttons;

/**
 * TinyMCE superscript and subscript button plugin for Moodle
 *
 * @package     tiny_supersub
 * @copyright   2025 Philipp Imhof <philipp.imhof@ksso.ch>
 * @license     https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
class plugininfo extends plugin implements plugin_with_buttons {
    /**
     * Plugin name.
     */
    public const PLUGIN_NAME = 'tiny_supersub';

    /**
     * Get a list of the buttons provided by this plugin.
     *
     * @return string[]
     */
    public static function get_available_buttons(): array {
        return [
            'tiny_supersub_superscript',
            'tiny_supersub_subscript',
        ];
    }

    /**
     * Return base directory of the plugin.
     *
     * @return string
     */
    public static function get_base_dir(): string {
        global $CFG;
        $dir = str_replace($CFG->dirroot, '', realpath(__DIR__));
        return substr($dir, 0, strrpos($dir, DIRECTORY_SEPARATOR));
    }
}
