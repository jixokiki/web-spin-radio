import pygame
import sys
import random

# Inisialisasi Pygame
pygame.init()

# Pengaturan layar
screen_width = 400
screen_height = 400
screen = pygame.display.set_mode((screen_width, screen_height))
pygame.display.set_caption("Catch the Ball")

# Warna
white = (255, 255, 255)
blue = (0, 0, 255)

# Karakter pemain
player_width = 50
player_height = 50
player_x = (screen_width - player_width) // 2
player_y = screen_height - player_height

# Bola
ball_width = 20
ball_height = 20
ball_x = random.randint(0, screen_width - ball_width)
ball_y = 0
ball_speed = 5

# Skor
score = 0
font = pygame.font.Font(None, 36)

# Fungsi untuk menggambar karakter pemain
def draw_player(x, y):
    pygame.draw.rect(screen, blue, (x, y, player_width, player_height))

# Fungsi untuk menggambar bola
def draw_ball(x, y):
    pygame.draw.circle(screen, white, (x, y), ball_width // 2)

# Fungsi untuk menampilkan skor
def show_score():
    score_text = font.render("Score: " + str(score), True, white)
    screen.blit(score_text, (10, 10))

# Loop utama permainan
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    # Mengendalikan karakter pemain
    keys = pygame.key.get_pressed()
    if keys[pygame.K_LEFT] and player_x > 0:
        player_x -= 5
    if keys[pygame.K_RIGHT] and player_x < screen_width - player_width:
        player_x += 5

    # Menggerakkan bola ke bawah
    ball_y += ball_speed

    # Jika bola jatuh ke bawah layar
    if ball_y > screen_height:
        ball_x = random.randint(0, screen_width - ball_width)
        ball_y = 0
        score += 1

    # Deteksi tabrakan antara bola dan pemain
    if (
        player_x < ball_x + ball_width
        and player_x + player_width > ball_x
        and player_y < ball_y + ball_height
        and player_y + player_height > ball_y
    ):
        ball_x = random.randint(0, screen_width - ball_width)
        ball_y = 0
        score += 1

    # Menggambar elemen permainan
    screen.fill((0, 0, 0))
    draw_player(player_x, player_y)
    draw_ball(ball_x, ball_y)
    show_score()
    pygame.display.update()

# Keluar dari permainan
pygame.quit()
sys.exit()
