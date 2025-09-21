// Enhanced Features for The Definition of R&B Website

// Music Player Integration
class MusicPlayer {
    constructor() {
        this.currentTrack = null;
        this.isPlaying = false;
        this.playlist = [];
        this.init();
    }
    
    init() {
        this.createPlayerUI();
        this.bindEvents();
    }
    
    createPlayerUI() {
        const playerHTML = `
            <div id="music-player" class="music-player hidden">
                <div class="player-content">
                    <div class="track-info">
                        <img src="" alt="Album Art" class="album-art">
                        <div class="track-details">
                            <h4 class="track-title">Select a track</h4>
                            <p class="track-artist">Artist</p>
                        </div>
                    </div>
                    <div class="player-controls">
                        <button class="control-btn prev-btn">
                            <i class="fas fa-step-backward"></i>
                        </button>
                        <button class="control-btn play-pause-btn">
                            <i class="fas fa-play"></i>
                        </button>
                        <button class="control-btn next-btn">
                            <i class="fas fa-step-forward"></i>
                        </button>
                    </div>
                    <div class="player-progress">
                        <span class="current-time">0:00</span>
                        <div class="progress-bar">
                            <div class="progress-fill"></div>
                        </div>
                        <span class="total-time">0:00</span>
                    </div>
                    <button class="close-player">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', playerHTML);
        this.addPlayerStyles();
    }
    
    addPlayerStyles() {
        const styles = `
            .music-player {
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                background: linear-gradient(135deg, var(--charcoal), var(--deep-purple));
                color: var(--white);
                padding: 1rem 2rem;
                z-index: 1001;
                transform: translateY(100%);
                transition: transform 0.3s ease;
                box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.3);
            }
            
            .music-player.active {
                transform: translateY(0);
            }
            
            .player-content {
                display: grid;
                grid-template-columns: 1fr auto 1fr auto;
                gap: 2rem;
                align-items: center;
                max-width: 1200px;
                margin: 0 auto;
            }
            
            .track-info {
                display: flex;
                gap: 1rem;
                align-items: center;
            }
            
            .album-art {
                width: 50px;
                height: 50px;
                border-radius: 8px;
                object-fit: cover;
            }
            
            .track-title {
                font-size: 1rem;
                font-weight: 600;
                margin-bottom: 0.25rem;
            }
            
            .track-artist {
                font-size: 0.9rem;
                opacity: 0.8;
                margin: 0;
            }
            
            .player-controls {
                display: flex;
                gap: 1rem;
                align-items: center;
            }
            
            .control-btn {
                background: none;
                border: none;
                color: var(--white);
                font-size: 1.2rem;
                cursor: pointer;
                transition: var(--transition-smooth);
                padding: 0.5rem;
                border-radius: 50%;
            }
            
            .control-btn:hover {
                background: rgba(255, 255, 255, 0.1);
                transform: scale(1.1);
            }
            
            .play-pause-btn {
                background: var(--gold);
                color: var(--charcoal);
                font-size: 1.5rem;
                width: 50px;
                height: 50px;
            }
            
            .play-pause-btn:hover {
                background: var(--white);
            }
            
            .player-progress {
                display: flex;
                align-items: center;
                gap: 1rem;
                min-width: 300px;
            }
            
            .progress-bar {
                flex: 1;
                height: 4px;
                background: rgba(255, 255, 255, 0.2);
                border-radius: 2px;
                cursor: pointer;
                position: relative;
            }
            
            .progress-fill {
                height: 100%;
                background: var(--gold);
                border-radius: 2px;
                width: 0%;
                transition: width 0.1s ease;
            }
            
            .current-time, .total-time {
                font-size: 0.9rem;
                opacity: 0.8;
                min-width: 40px;
            }
            
            .close-player {
                background: none;
                border: none;
                color: var(--white);
                font-size: 1.2rem;
                cursor: pointer;
                opacity: 0.7;
                transition: var(--transition-smooth);
            }
            
            .close-player:hover {
                opacity: 1;
            }
            
            @media (max-width: 768px) {
                .player-content {
                    grid-template-columns: 1fr auto;
                    gap: 1rem;
                }
                
                .player-progress {
                    grid-column: 1 / -1;
                    margin-top: 1rem;
                    min-width: auto;
                }
            }
        `;
        
        const styleSheet = document.createElement('style');
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
    }
    
    bindEvents() {
        const player = document.getElementById('music-player');
        const playPauseBtn = player.querySelector('.play-pause-btn');
        const closeBtn = player.querySelector('.close-player');
        
        playPauseBtn.addEventListener('click', () => this.togglePlayPause());
        closeBtn.addEventListener('click', () => this.hide());
    }
    
    show(trackData) {
        const player = document.getElementById('music-player');
        const albumArt = player.querySelector('.album-art');
        const trackTitle = player.querySelector('.track-title');
        const trackArtist = player.querySelector('.track-artist');
        
        albumArt.src = trackData.albumArt || 'images/default-album.jpg';
        trackTitle.textContent = trackData.title || 'Unknown Track';
        trackArtist.textContent = trackData.artist || 'Unknown Artist';
        
        player.classList.remove('hidden');
        player.classList.add('active');
        
        this.currentTrack = trackData;
    }
    
    hide() {
        const player = document.getElementById('music-player');
        player.classList.remove('active');
        setTimeout(() => {
            player.classList.add('hidden');
        }, 300);
    }
    
    togglePlayPause() {
        const playPauseBtn = document.querySelector('.play-pause-btn i');
        
        if (this.isPlaying) {
            playPauseBtn.className = 'fas fa-play';
            this.isPlaying = false;
        } else {
            playPauseBtn.className = 'fas fa-pause';
            this.isPlaying = true;
        }
        
        // In a real implementation, this would control actual audio playback
        console.log(this.isPlaying ? 'Playing' : 'Paused', this.currentTrack);
    }
}

// Artist Discovery Engine
class ArtistDiscovery {
    constructor() {
        this.artists = [
            {
                name: 'Coco Jones',
                genre: 'Contemporary R&B',
                mood: ['Confident', 'Empowering', 'Soulful'],
                similar: ['Chloe Bailey', 'Muni Long'],
                spotifyId: 'coco-jones'
            },
            {
                name: 'Chloe Bailey',
                genre: 'Contemporary R&B',
                mood: ['Sultry', 'Bold', 'Artistic'],
                similar: ['Coco Jones', 'Kiana Ledé'],
                spotifyId: 'chloe-bailey'
            },
            {
                name: 'Phabo',
                genre: 'Neo-Soul',
                mood: ['Smooth', 'Nostalgic', 'Intimate'],
                similar: ['D\'Angelo', 'Erykah Badu'],
                spotifyId: 'phabo'
            }
        ];
        
        this.init();
    }
    
    init() {
        this.createDiscoveryWidget();
        this.bindEvents();
    }
    
    createDiscoveryWidget() {
        const widgetHTML = `
            <div id="discovery-widget" class="discovery-widget">
                <div class="widget-header">
                    <h3>Discover Your Next Favorite Artist</h3>
                    <p>Tell us what you're feeling and we'll recommend the perfect R&B artist</p>
                </div>
                <div class="mood-selector">
                    <h4>What's your mood?</h4>
                    <div class="mood-buttons">
                        <button class="mood-btn" data-mood="confident">Confident</button>
                        <button class="mood-btn" data-mood="sultry">Sultry</button>
                        <button class="mood-btn" data-mood="smooth">Smooth</button>
                        <button class="mood-btn" data-mood="empowering">Empowering</button>
                        <button class="mood-btn" data-mood="nostalgic">Nostalgic</button>
                        <button class="mood-btn" data-mood="intimate">Intimate</button>
                    </div>
                </div>
                <div class="genre-selector">
                    <h4>Preferred style?</h4>
                    <div class="genre-buttons">
                        <button class="genre-btn" data-genre="Contemporary R&B">Contemporary</button>
                        <button class="genre-btn" data-genre="Neo-Soul">Neo-Soul</button>
                        <button class="genre-btn" data-genre="Alternative R&B">Alternative</button>
                        <button class="genre-btn" data-genre="UK R&B">UK R&B</button>
                    </div>
                </div>
                <button class="discover-btn-widget">Discover Artists</button>
                <div class="recommendations" style="display: none;">
                    <h4>Perfect matches for you:</h4>
                    <div class="recommended-artists"></div>
                </div>
            </div>
        `;
        
        // Add to genre evolution section
        const evolutionSection = document.querySelector('.genre-evolution .container');
        if (evolutionSection) {
            evolutionSection.insertAdjacentHTML('beforeend', widgetHTML);
        }
        
        this.addDiscoveryStyles();
    }
    
    addDiscoveryStyles() {
        const styles = `
            .discovery-widget {
                background: rgba(255, 255, 255, 0.1);
                backdrop-filter: blur(10px);
                border-radius: 20px;
                padding: 2rem;
                margin-top: 3rem;
                border: 1px solid rgba(255, 255, 255, 0.2);
            }
            
            .widget-header h3 {
                font-family: var(--font-primary);
                font-size: 1.8rem;
                margin-bottom: 0.5rem;
                color: var(--gold);
            }
            
            .widget-header p {
                opacity: 0.9;
                margin-bottom: 2rem;
            }
            
            .mood-selector, .genre-selector {
                margin-bottom: 2rem;
            }
            
            .mood-selector h4, .genre-selector h4 {
                margin-bottom: 1rem;
                color: var(--white);
            }
            
            .mood-buttons, .genre-buttons {
                display: flex;
                flex-wrap: wrap;
                gap: 0.5rem;
            }
            
            .mood-btn, .genre-btn {
                background: rgba(255, 255, 255, 0.1);
                color: var(--white);
                border: 1px solid rgba(255, 255, 255, 0.3);
                padding: 0.5rem 1rem;
                border-radius: 20px;
                cursor: pointer;
                transition: var(--transition-smooth);
                font-size: 0.9rem;
            }
            
            .mood-btn:hover, .genre-btn:hover,
            .mood-btn.active, .genre-btn.active {
                background: var(--gold);
                color: var(--charcoal);
                border-color: var(--gold);
            }
            
            .discover-btn-widget {
                background: var(--gold);
                color: var(--charcoal);
                border: none;
                padding: 1rem 2rem;
                border-radius: 25px;
                font-weight: 600;
                cursor: pointer;
                transition: var(--transition-smooth);
                width: 100%;
                font-size: 1rem;
            }
            
            .discover-btn-widget:hover {
                background: var(--white);
                transform: translateY(-2px);
            }
            
            .recommendations {
                margin-top: 2rem;
                padding-top: 2rem;
                border-top: 1px solid rgba(255, 255, 255, 0.2);
            }
            
            .recommended-artists {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 1rem;
                margin-top: 1rem;
            }
            
            .recommended-artist {
                background: rgba(255, 255, 255, 0.1);
                padding: 1rem;
                border-radius: 10px;
                text-align: center;
                transition: var(--transition-smooth);
                cursor: pointer;
            }
            
            .recommended-artist:hover {
                background: rgba(255, 255, 255, 0.2);
                transform: translateY(-3px);
            }
            
            .recommended-artist img {
                width: 60px;
                height: 60px;
                border-radius: 50%;
                object-fit: cover;
                margin-bottom: 0.5rem;
            }
            
            .recommended-artist h5 {
                margin-bottom: 0.25rem;
                color: var(--gold);
            }
            
            .recommended-artist p {
                font-size: 0.8rem;
                opacity: 0.8;
                margin: 0;
            }
        `;
        
        const styleSheet = document.createElement('style');
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
    }
    
    bindEvents() {
        const widget = document.getElementById('discovery-widget');
        if (!widget) return;
        
        const moodButtons = widget.querySelectorAll('.mood-btn');
        const genreButtons = widget.querySelectorAll('.genre-btn');
        const discoverBtn = widget.querySelector('.discover-btn-widget');
        
        moodButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                moodButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
        
        genreButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                genreButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
        
        discoverBtn.addEventListener('click', () => {
            this.generateRecommendations();
        });
    }
    
    generateRecommendations() {
        const selectedMood = document.querySelector('.mood-btn.active')?.dataset.mood;
        const selectedGenre = document.querySelector('.genre-btn.active')?.dataset.genre;
        
        if (!selectedMood && !selectedGenre) {
            showNotification('Please select at least a mood or genre preference', 'error');
            return;
        }
        
        const recommendations = this.artists.filter(artist => {
            const moodMatch = !selectedMood || artist.mood.some(mood => 
                mood.toLowerCase().includes(selectedMood.toLowerCase())
            );
            const genreMatch = !selectedGenre || artist.genre === selectedGenre;
            
            return moodMatch && genreMatch;
        });
        
        this.displayRecommendations(recommendations);
    }
    
    displayRecommendations(artists) {
        const recommendationsDiv = document.querySelector('.recommendations');
        const artistsContainer = document.querySelector('.recommended-artists');
        
        if (artists.length === 0) {
            artistsContainer.innerHTML = '<p>No perfect matches found, but check out our featured artists above!</p>';
        } else {
            artistsContainer.innerHTML = artists.map(artist => `
                <div class="recommended-artist" data-artist="${artist.name}">
                    <img src="images/${artist.name.toLowerCase().replace(/\s+/g, '-')}-artist.jpg" 
                         alt="${artist.name}" 
                         onerror="this.src='images/default-artist.jpg'">
                    <h5>${artist.name}</h5>
                    <p>${artist.genre}</p>
                </div>
            `).join('');
            
            // Add click events to recommended artists
            artistsContainer.querySelectorAll('.recommended-artist').forEach(artistEl => {
                artistEl.addEventListener('click', () => {
                    const artistName = artistEl.dataset.artist;
                    this.showArtistDetails(artistName);
                });
            });
        }
        
        recommendationsDiv.style.display = 'block';
        recommendationsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    
    showArtistDetails(artistName) {
        const artist = this.artists.find(a => a.name === artistName);
        if (!artist) return;
        
        showNotification(`🎵 Discovering ${artist.name} - ${artist.genre} artist`, 'info');
        
        // Scroll to the artist in the main grid
        const artistCards = document.querySelectorAll('.artist-card');
        artistCards.forEach(card => {
            const cardTitle = card.querySelector('h3');
            if (cardTitle && cardTitle.textContent.includes(artistName)) {
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                card.style.transform = 'scale(1.05)';
                card.style.boxShadow = '0 20px 60px rgba(139, 21, 56, 0.3)';
                
                setTimeout(() => {
                    card.style.transform = '';
                    card.style.boxShadow = '';
                }, 2000);
            }
        });
    }
}

// Social Media Integration
class SocialIntegration {
    constructor() {
        this.init();
    }
    
    init() {
        this.createSocialFeed();
        this.addShareButtons();
    }
    
    createSocialFeed() {
        const feedHTML = `
            <div class="social-feed">
                <h3>Latest from the R&B Community</h3>
                <div class="feed-container">
                    <div class="feed-item">
                        <div class="feed-header">
                            <img src="images/coco-jones-featured.jpg" alt="Coco Jones">
                            <div>
                                <h4>@cocojones</h4>
                                <span>2 hours ago</span>
                            </div>
                        </div>
                        <p>So grateful for all the love on "ICU" 🎵✨ Working on something special for you all!</p>
                        <div class="feed-actions">
                            <button><i class="fas fa-heart"></i> 1.2K</button>
                            <button><i class="fas fa-retweet"></i> 234</button>
                            <button><i class="fas fa-share"></i></button>
                        </div>
                    </div>
                    
                    <div class="feed-item">
                        <div class="feed-header">
                            <img src="images/phabo-artist.jpg" alt="Phabo">
                            <div>
                                <h4>@phabomusic</h4>
                                <span>5 hours ago</span>
                            </div>
                        </div>
                        <p>Neo-soul is alive and well 🎶 Thank you for calling me R&B's North Star ⭐</p>
                        <div class="feed-actions">
                            <button><i class="fas fa-heart"></i> 892</button>
                            <button><i class="fas fa-retweet"></i> 156</button>
                            <button><i class="fas fa-share"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Add to newsletter section
        const newsletterSection = document.querySelector('.newsletter .container');
        if (newsletterSection) {
            newsletterSection.insertAdjacentHTML('afterbegin', feedHTML);
        }
        
        this.addSocialStyles();
    }
    
    addSocialStyles() {
        const styles = `
            .social-feed {
                background: var(--white);
                border-radius: 20px;
                padding: 2rem;
                margin-bottom: 3rem;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            }
            
            .social-feed h3 {
                font-family: var(--font-primary);
                font-size: 1.8rem;
                color: var(--charcoal);
                margin-bottom: 1.5rem;
                text-align: center;
            }
            
            .feed-container {
                display: grid;
                gap: 1.5rem;
            }
            
            .feed-item {
                border: 1px solid var(--cream);
                border-radius: 15px;
                padding: 1.5rem;
                transition: var(--transition-smooth);
            }
            
            .feed-item:hover {
                box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
                transform: translateY(-2px);
            }
            
            .feed-header {
                display: flex;
                align-items: center;
                gap: 1rem;
                margin-bottom: 1rem;
            }
            
            .feed-header img {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                object-fit: cover;
            }
            
            .feed-header h4 {
                margin: 0;
                color: var(--burgundy);
                font-weight: 600;
            }
            
            .feed-header span {
                color: var(--warm-brown);
                font-size: 0.9rem;
            }
            
            .feed-item p {
                margin-bottom: 1rem;
                line-height: 1.6;
                color: var(--charcoal);
            }
            
            .feed-actions {
                display: flex;
                gap: 1rem;
            }
            
            .feed-actions button {
                background: none;
                border: none;
                color: var(--warm-brown);
                cursor: pointer;
                transition: var(--transition-smooth);
                display: flex;
                align-items: center;
                gap: 0.5rem;
                font-size: 0.9rem;
            }
            
            .feed-actions button:hover {
                color: var(--burgundy);
            }
        `;
        
        const styleSheet = document.createElement('style');
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
    }
    
    addShareButtons() {
        const shareHTML = `
            <div class="share-buttons">
                <span>Share this page:</span>
                <button class="share-btn twitter" data-platform="twitter">
                    <i class="fab fa-twitter"></i>
                </button>
                <button class="share-btn facebook" data-platform="facebook">
                    <i class="fab fa-facebook"></i>
                </button>
                <button class="share-btn instagram" data-platform="instagram">
                    <i class="fab fa-instagram"></i>
                </button>
                <button class="share-btn copy" data-platform="copy">
                    <i class="fas fa-link"></i>
                </button>
            </div>
        `;
        
        // Add to footer
        const footer = document.querySelector('.footer-content');
        if (footer) {
            footer.insertAdjacentHTML('beforeend', shareHTML);
        }
        
        // Bind share events
        document.querySelectorAll('.share-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.handleShare(btn.dataset.platform);
            });
        });
    }
    
    handleShare(platform) {
        const url = window.location.href;
        const title = 'The Definition of R&B - Discover Modern Soul Music';
        
        switch (platform) {
            case 'twitter':
                window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`);
                break;
            case 'facebook':
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
                break;
            case 'instagram':
                showNotification('Copy the link and share on Instagram!', 'info');
                this.copyToClipboard(url);
                break;
            case 'copy':
                this.copyToClipboard(url);
                showNotification('Link copied to clipboard!', 'success');
                break;
        }
    }
    
    copyToClipboard(text) {
        navigator.clipboard.writeText(text).catch(() => {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
        });
    }
}

// Initialize enhanced features when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize music player
    window.musicPlayer = new MusicPlayer();
    
    // Initialize artist discovery
    window.artistDiscovery = new ArtistDiscovery();
    
    // Initialize social integration
    window.socialIntegration = new SocialIntegration();
    
    // Enhanced play button functionality
    document.querySelectorAll('.play-btn, .play-overlay').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Get artist info from the card
            const card = btn.closest('.artist-card') || btn.closest('.featured-artist');
            const artistName = card.querySelector('h3').textContent;
            const artistImage = card.querySelector('img').src;
            
            // Show music player with track info
            window.musicPlayer.show({
                title: 'Latest Track',
                artist: artistName,
                albumArt: artistImage
            });
        });
    });
    
    // Enhanced discover button functionality
    document.querySelectorAll('.discover-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            const card = btn.closest('.artist-card');
            const artistName = card.querySelector('h3').textContent;
            
            // Simulate artist page navigation
            showNotification(`🎵 Exploring ${artistName}'s music...`, 'info');
            
            // In a real implementation, this would navigate to artist page
            setTimeout(() => {
                window.musicPlayer.show({
                    title: 'Featured Track',
                    artist: artistName,
                    albumArt: card.querySelector('img').src
                });
            }, 1000);
        });
    });
});

// Export for use in other scripts
window.EnhancedFeatures = {
    MusicPlayer,
    ArtistDiscovery,
    SocialIntegration
};
