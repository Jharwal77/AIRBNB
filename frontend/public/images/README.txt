AIRBNB-CLONE LISTING — ALL IMAGES
=================================
Source of files: the Airbnb-clone reference deployments (PlayPower take-home task).
The primary reference URL (airbnb-clone-umber-two.vercel.app) is behind Vercel's bot
checkpoint, which blocks all automated access including direct image paths. The assets
below were recovered from other public deployments of the same project and verified
against the screenshots in "Playpower Labs Assignment_ Airbnb-Clone App.pdf".

FOLDERS
-------
listing/   43 property photos — the app's own photo-tour order + grouping.
           Filenames: <n>-<section>-<k>--<original-uuid>.jpeg
           01-03  Living room 1        (detail: Sofa · Air conditioning · Ceiling fan · TV)
           04-10  Living room 2        (detail: Ceiling fan · Hot tub)
           11-12  Full kitchen
           13-18  Bedroom
           19     Full bathroom
           20-24  Gym
           25-30  Exterior
           31-33  Pool
           34-43  Additional photos
           Original resolution: 1440x1080 (a few 1440x808), JPEG.

avatars/   host.jpeg + co-hosts (co1-3) + review avatars (rev1-5)
similar/   s1-s6 — "More stays nearby" thumbnails
ui/        logo.svg, laurel-left/right.png, laurel-badge.svg, searchbar-house.png, discount.svg
ui/chips/  guest-favourite rating chips (accuracy, cleanliness, comfort, ... hot-tub)

FILES
-----
_photo_tour.json    sections, titles, per-section detail text and photo order
_listing_index.json flat index: number, section, title, original uuid, filename
all-images-gallery.html  contact sheet of everything (open in a browser)
